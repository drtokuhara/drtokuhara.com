'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import esTranslations from './translations/es.json';

const LanguageContext = createContext({
  lang: 'en',
  toggleLanguage: () => {},
  t: (key) => key,
});

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('drt-lang');
    if (saved === 'es') setLang('es');
    setMounted(true);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLang((prev) => {
      const next = prev === 'en' ? 'es' : 'en';
      localStorage.setItem('drt-lang', next);
      return next;
    });
  }, []);

  const t = useCallback(
    (key) => {
      if (lang === 'en') return null;
      const keys = key.split('.');
      let value = esTranslations;
      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = value[k];
        } else {
          return null;
        }
      }
      return typeof value === 'string' ? value : null;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t, mounted }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
