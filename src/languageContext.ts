import { createContext } from 'react';

export type LanguageContextType = "en" | "fr";
export const languageContext = createContext<LanguageContextType>("fr");
