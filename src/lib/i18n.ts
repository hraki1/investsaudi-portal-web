"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "../locales/en/common.json";
import arTranslations from "../locales/ar/common.json";

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          translation: enTranslations,
        },
        ar: {
          translation: arTranslations,
        },
      },
      lng: typeof window !== "undefined" ? localStorage.getItem("i18nextLng") || "en" : "en",
      fallbackLng: "en",
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false,
      },
    });
}

export default i18n;

