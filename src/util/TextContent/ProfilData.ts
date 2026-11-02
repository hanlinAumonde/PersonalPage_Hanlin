import { LanguageContextType } from "../../config/languageContext.ts";

interface ProfilText {
    sectionTitle: string;
    bio: {
        paragraph1: string;
        paragraph2: string;
        highlight: string;
    };
}

const profilTexts: Record<LanguageContextType, ProfilText> = {
    fr: {
        sectionTitle: "Profil",
        bio: {
            paragraph1: "Jeune Diplômé de {highlight}, filière systèmes et réseaux informatiques.",
            paragraph2: "Passionné par l'informatique, la découverte et l'apprentissage de nouvelles technologies. Je cherche à mettre en œuvre mes compétences techniques dans des projets innovants.",
            highlight: "l'Université de Technologie de Compiègne"
        }
    },
    en: {
        sectionTitle: "Profile",
        bio: {
            paragraph1: "Recent Graduate from {highlight}, computer systems and networks specialization.",
            paragraph2: "Passionate about computer science, discovering and learning new technologies. I seek to implement my technical skills in innovative projects.",
            highlight: "the University of Technology of Compiègne"
        }
    },
    zh: {
        sectionTitle: "个人简介",
        bio: {
            paragraph1: "毕业于{highlight}，主修计算机系统与网络专业。",
            paragraph2: "热衷于计算机科学，喜欢探索和学习新技术，希望将自己的技术能力应用到创新的项目中。",
            highlight: "贡比涅技术大学"
        }
    }
};

export const getProfilText = (language: LanguageContextType): ProfilText => {
    return profilTexts[language] || profilTexts.fr;
};
