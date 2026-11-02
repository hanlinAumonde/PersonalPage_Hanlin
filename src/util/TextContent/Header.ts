import { LanguageContextType } from "../../config/languageContext.ts";

const headerTexts: Record<LanguageContextType, { title: string; subtitle: string }> = {
    en: {
        title: "Hello! I'm Hanlin WU",
        subtitle: "Recent graduate from UTC in 2024"
    },
    fr: {
        title: "Bonjour ! Je suis Hanlin WU",
        subtitle: "Jeune diplômé de l'UTC en 2024"
    },
    zh: {
        title: "你好！我是 Hanlin WU",
        subtitle: "2024 年毕业于 UTC"
    }
}

export const getHeaderText = (language: LanguageContextType) => {
    return headerTexts[language] || headerTexts.fr;
};

