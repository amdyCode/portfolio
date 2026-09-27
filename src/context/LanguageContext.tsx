import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import translations from '../data/translations.json';

export type Language = 'fr' | 'en';
type TranslationKey = keyof typeof translations.fr;

interface LanguageContextValue { language: Language; setLanguage: (language: Language) => void; t: (key: TranslationKey) => string; }
const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguageState] = useState<Language>(() => (localStorage.getItem('portfolio-language') as Language) || 'fr');
    const setLanguage = (nextLanguage: Language) => {
        setLanguageState(nextLanguage);
        localStorage.setItem('portfolio-language', nextLanguage);
    };
    useEffect(() => { document.documentElement.lang = language; }, [language]);
    return <LanguageContext.Provider value={{ language, setLanguage, t: key => translations[language][key] }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error('useLanguage must be used within LanguageProvider');
    return context;
};
