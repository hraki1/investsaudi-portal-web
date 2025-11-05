import enTranslations from "@/locales/en/common.json";
import arTranslations from "@/locales/ar/common.json";

const translations = {
  en: enTranslations,
  ar: arTranslations,
};

function getNestedValue(obj: any, path: string): any {
  return path.split(".").reduce((current, key) => current?.[key], obj);
}

export function getTranslations(locale: "en" | "ar" = "en") {
  const t = (key: string): string => {
    const value = getNestedValue(translations[locale], key);
    return value || key;
  };

  return { t, locale };
}

