import { createContext, useContext, useMemo, useState } from 'react';
import translations from '../content/Content';

const defaultLanguage = 'hu';

const LanguageContext = createContext(null);

const availableLanguages = [
  {
    code: 'hu',
    label: 'Magyar',
    flag: (
      <svg viewBox="0 0 24 18" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="6" fill="#CE2939" />
        <rect y="6" width="24" height="6" fill="#FFFFFF" />
        <rect y="12" width="24" height="6" fill="#477050" />
      </svg>
    )
  },
  {
    code: 'en',
    label: 'English',
    flag: (
      <svg viewBox="0 0 24 18" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="18" fill="#012169" />
        <path d="M0 0 L24 18 M24 0 L0 18" stroke="#FFFFFF" strokeWidth="3" />
        <path d="M12 0 V18 M0 9 H24" stroke="#FFFFFF" strokeWidth="5" />
        <path d="M12 0 V18 M0 9 H24" stroke="#C8102E" strokeWidth="3" />
        <path d="M0 0 L24 18 M24 0 L0 18" stroke="#C8102E" strokeWidth="1" />
      </svg>
    )
  },
  {
    code: 'de',
    label: 'Deutsch',
    flag: (
      <svg viewBox="0 0 24 18" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="6" fill="#000000" />
        <rect y="6" width="24" height="6" fill="#DD0000" />
        <rect y="12" width="24" height="6" fill="#FFCE00" />
      </svg>
    )
  }
];

const getInitialLanguage = () => {
  if (typeof window === 'undefined') {
    return defaultLanguage;
  }
  const savedLanguage = window.localStorage.getItem('language');
  return savedLanguage && translations[savedLanguage] ? savedLanguage : defaultLanguage;
};

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(getInitialLanguage);

  const setLanguage = (lang) => {
    if (!translations[lang]) return;
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('language', lang);
    }
  };

  const value = useMemo(() => {
    const activeContent = translations[language] ?? translations[defaultLanguage];
    return {
      language,
      setLanguage,
      languages: availableLanguages,
      content: activeContent
    };
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};