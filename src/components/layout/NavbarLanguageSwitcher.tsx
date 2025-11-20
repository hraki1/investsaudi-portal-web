import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function NavbarLanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = (newLang: string) => {
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
    setIsOpen(false);
  };

  const currentLanguage = i18n.language === 'en' ? 'العربية' : 'English';
  const otherLanguage = i18n.language === 'en' ? 'English' : 'العربية';

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white font-bold py-2 px-4 rounded flex items-center gap-2 transition-all duration-300"
      >
        <span>{currentLanguage}</span>
        <svg 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-full bg-black/20 backdrop-blur-sm rounded shadow-lg z-50">
          <button
            onClick={() => toggleLanguage(i18n.language === 'en' ? 'ar' : 'en')}
            className="w-full text-left text-white bukra-regular py-3 px-4 hover:bg-black/30 transition-colors rounded"
          >
            {otherLanguage}
          </button>
        </div>
      )}
    </div>
  );
}

