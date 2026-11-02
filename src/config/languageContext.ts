import { createContext } from 'react';

export type LanguageContextType = "en" | "fr" | "zh";
export const languageContext = createContext<LanguageContextType>("fr");
