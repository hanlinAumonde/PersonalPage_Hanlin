import { Dispatch, SetStateAction, useEffect } from 'react';

const useScrollSpy = (setActiveLink:Dispatch<SetStateAction<number>>) => {
    useEffect(() => {
        const sectionIds = ['Profils', 'Skills', 'Experience', 'Projects'];
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
    }, [setActiveLink]);
};

export default useScrollSpy;