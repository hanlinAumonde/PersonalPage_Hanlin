import { LanguageContextType } from "../../languageContext";

const headerTexts: Record<LanguageContextType, { title: string; subtitle: string }> = {
    en: {
        title: "Hello! I'm Hanlin WU",
        subtitle: "Recent graduate from UTC in 2024"
    },
    fr: {
        title: "Bonjour ! Je suis Hanlin WU",
        subtitle: "Jeune diplômé de l'UTC en 2024"
    }
}

export const getHeaderText = (language: LanguageContextType) => {
    return headerTexts[language] || headerTexts.fr;
};

