import { Dispatch, SetStateAction, useEffect } from 'react';
import {LanguageContextType} from "../../config/languageContext.ts";
import {getMenuItem} from "../TextContent/NavBarText.ts";

const useScrollSpy = (setActiveLink:Dispatch<SetStateAction<number>>, language: LanguageContextType) => {
    useEffect(() => {
        const sectionIds = getMenuItem(language);
        const sections = sectionIds.map(id => document.getElementById(id));

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const index = sectionIds.indexOf(entry.target.id);
                        setActiveLink(index);
                    }
                });
            },
            { threshold: [0.3,0.6,1.0] }
        );

        sections.forEach(section => {
            if (section) observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                if (section) observer.unobserve(section);
            });
        };
    }, [setActiveLink,language]);
};

export default useScrollSpy;