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
    }
};

export const getProfilText = (language: LanguageContextType): ProfilText => {
    return profilTexts[language] || profilTexts.fr;
};
