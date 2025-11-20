"use client";

import { useTranslation } from "react-i18next";
import { useEffect, useState, useRef, startTransition } from "react";

export default function FooterLanguageSwitcher() {
  const { i18n } = useTranslation();
  // Start with "en" to ensure consistent server/client render
  const [currentLang, setCurrentLang] = useState<string>("en");
  const isInitialized = useRef(false);

  useEffect(() => {
    // Only access localStorage after mount to avoid hydration mismatch
    if (!isInitialized.current) {
      isInitialized.current = true;
      const savedLang = localStorage.getItem("i18nextLng") || "en";
      startTransition(() => {
        setCurrentLang(savedLang);
      });
      i18n.changeLanguage(savedLang);
      document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = savedLang;
    }
  }, [i18n]);

  useEffect(() => {
    // Sync i18n and document with current state (only after initialization)
    if (isInitialized.current) {
      i18n.changeLanguage(currentLang);
      document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = currentLang;
    }
  }, [currentLang, i18n]);

  const toggleLanguage = async (newLang: string) => {
    setCurrentLang(newLang);
    i18n.changeLanguage(newLang);
    localStorage.setItem("i18nextLng", newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
  };

  return (
    <div>
      <p className="text-xs md:text-sm text-gray-700 bukra-regular mb-2 uppercase">
        MISA WEBSITE OFFERED IN
      </p>
      <div className="flex items-center gap-2">
        {currentLang === "en" ? (
          <>
            <span className="text-sm md:text-base text-gray-700 bukra-regular underline">
              English
            </span>
            <span className="text-sm md:text-base text-gray-700 bukra-regular">
              |
            </span>
            <button
              onClick={() => toggleLanguage("ar")}
              className="text-sm md:text-base text-gray-700 bukra-regular underline hover:text-gray-900 transition-colors"
            >
              (Arabic العربية)
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => toggleLanguage("en")}
              className="text-sm md:text-base text-gray-700 bukra-regular underline hover:text-gray-900 transition-colors"
            >
              English
            </button>
            <span className="text-sm md:text-base text-gray-700 bukra-regular">
              |
            </span>
            <span className="text-sm md:text-base text-gray-700 bukra-regular underline">
              (Arabic العربية)
            </span>
          </>
        )}
      </div>
    </div>
  );
}
