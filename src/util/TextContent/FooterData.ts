import { LanguageContextType } from "../../config/languageContext.ts";

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
        resumeText: "Mon CV",
        copyrightText: "Tous droits réservés.",
        creditsText: "Icônes par",
        creditsLinkText: "freepik-icons"
    },
    en: {
        scrollToTopText: "Back to top",
        githubText: "GitHub",
        linkedinText: "LinkedIn",
        resumeText: "My Resume",
        copyrightText: "All rights reserved.",
        creditsText: "Icons by",
        creditsLinkText: "freepik-icons"
    },
    zh: {
        scrollToTopText: "返回顶部",
        githubText: "GitHub",
        linkedinText: "LinkedIn",
        resumeText: "我的简历",
        copyrightText: "保留所有权利。",
        creditsText: "图标来源：",
        creditsLinkText: "freepik-icons"
    }
};

export const getFooterText = (language: LanguageContextType): FooterText => {
    return footerTexts[language] || footerTexts.fr;
};
