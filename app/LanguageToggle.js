'use client';

import { useLanguage } from './LanguageContext';

export default function LanguageToggle() {
  const { lang, toggleLanguage, mounted } = useLanguage();

  if (!mounted) return null;

  return (
    <button
      onClick={toggleLanguage}
      className="lang-toggle"
      aria-label={lang === 'en' ? 'Cambiar a Español' : 'Switch to English'}
      title={lang === 'en' ? 'Español' : 'English'}
    >
      <span className={`lang-option ${lang === 'en' ? 'lang-active' : ''}`}>EN</span>
      <span className="lang-divider">|</span>
      <span className={`lang-option ${lang === 'es' ? 'lang-active' : ''}`}>ES</span>
    </button>
  );
}
