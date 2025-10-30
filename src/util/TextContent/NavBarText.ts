import {LanguageContextType} from "../../config/languageContext.ts";

const menuItemsText : Record<LanguageContextType, string[]>= {
    fr:
    [
        'Profil',
        'Compétences',
        'Expériences',
        'Projets'
    ],
    en:
    [
        'Profile',
        'Skills',
        'Experiences',
        'Projects'
    ]
};

export const getMenuItem = (language: LanguageContextType) => {
    return menuItemsText[language] || menuItemsText.fr;
}