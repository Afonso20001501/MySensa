import { createContext, useContext, useEffect, useState } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext(undefined);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(
    localStorage.getItem('lang') || 'pt'
  );

  useEffect(() => {
    localStorage.setItem('lang', language);
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      'useLanguage must be used inside a LanguageProvider'
    );
  }

  return context;
}
