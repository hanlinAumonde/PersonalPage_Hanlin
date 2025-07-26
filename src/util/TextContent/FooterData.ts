import { LanguageContextType } from "../../languageContext";

interface FooterText {
    scrollToTopText: string;
    githubText: string;
    linkedinText: string;
    resumeText: string;
    copyrightText: string;
    creditsText: string;
    creditsLinkText: string;
}

const footerTexts: Record<LanguageContextType, FooterText> = {
    fr: {
        scrollToTopText: "Retour en haut",
        githubText: "GitHub",
        linkedinText: "LinkedIn",
        resumeText: "Résumé",
        copyrightText: "Tous droits réservés.",
        creditsText: "Icônes par",
        creditsLinkText: "freepik-icons"
    },
    en: {
        scrollToTopText: "Back to top",
        githubText: "GitHub",
        linkedinText: "LinkedIn",
        resumeText: "Resume",
        copyrightText: "All rights reserved.",
        creditsText: "Icons by",
        creditsLinkText: "freepik-icons"
    }
};

export const getFooterText = (language: LanguageContextType): FooterText => {
    return footerTexts[language] || footerTexts.fr;
};
