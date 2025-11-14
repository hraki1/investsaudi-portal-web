"use client";

import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { setLocale } from "@/lib/actions";

export default function FooterLanguageSwitcher() {
  const { i18n } = useTranslation();
  const router = useRouter();
  // Start with "en" to ensure consistent server/client render
  const [currentLang, setCurrentLang] = useState<string>("en");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Only access localStorage after mount to avoid hydration mismatch
    setIsMounted(true);
    const savedLang = localStorage.getItem("i18nextLng") || "en";
    setCurrentLang(savedLang);
    i18n.changeLanguage(savedLang);
    document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = savedLang;
  }, [i18n]);

  useEffect(() => {
    // Sync i18n and document with current state
    if (isMounted) {
      i18n.changeLanguage(currentLang);
      document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = currentLang;
    }
  }, [currentLang, i18n, isMounted]);

  const toggleLanguage = async (newLang: string) => {
    setCurrentLang(newLang);
    i18n.changeLanguage(newLang);
    localStorage.setItem("i18nextLng", newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
    await setLocale(newLang as "en" | "ar");
    router.refresh();
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
