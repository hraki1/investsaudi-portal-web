"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enCommon from "../locales/en/common.json";
import arCommon from "../locales/ar/common.json";
import enTranslations from "../locales/en/en.json";
import arTranslations from "../locales/ar/ar.json";

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          translation: { ...enCommon, ...enTranslations },
        },
        ar: {
          translation: { ...arCommon, ...arTranslations },
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

