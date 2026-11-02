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
    ],
    zh:
    [
        '个人简介',
        '专业技能',
        '工作经历',
        '项目展示'
    ]
};

const menuLabelText: Record<LanguageContextType, string> = {
    fr: 'Menu',
    en: 'Menu',
    zh: '菜单'
};

export const getMenuLabel = (language: LanguageContextType) => {
    return menuLabelText[language] || menuLabelText.fr;
};

export const getMenuItem = (language: LanguageContextType) => {
    return menuItemsText[language] || menuItemsText.fr;
}