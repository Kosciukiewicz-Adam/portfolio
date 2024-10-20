export const menuLinks = [
    { name: 'Home', scrollTo: 'home' },
    { name: 'Umiejętości', scrollTo: 'skills' },
    { name: 'Projekty', scrollTo: 'projects' },
    { name: 'Doświadczenie', scrollTo: 'work' },
    { name: 'Kontakt', scrollTo: 'contact' },
]

export const projects = [
    {
        imgs: ["topo1.JPG", "topo2.JPG", "topo3.JPG"],
        name: "Topo",
        skills: ["TypeScript", "Express", "MongoDB"],
        description: "Serwis informacyjny o regionach i drogach wspinaczkowych na całym świecie",
        linkRepo: "https://github.com/Kosciukiewicz-Adam/topo",
        linkDemo: "https://kosciukiewicz-adam.github.io/topo/"
    }
]

export const skills = [
    { name: 'SASS', link: 'https://sass-lang.com/' },
    { name: 'HTML', link: 'https://html.com/' },
    { name: 'JavaScript', link: 'https://www.javascript.com/' },
    { name: 'JQuery', link: '' },
    { name: 'TypeScript', link: 'https://www.typescriptlang.org/' },
    { name: 'React', link: 'https://reactjs.org/' },
    { name: 'Next', link: '' },
    { name: 'Node', link: 'https://nodejs.org/en/' },
    { name: 'express', link: 'https://expressjs.com/' },
    { name: 'Jest', link: '' },
    { name: 'Cypress', link: '' },
    { name: 'MongoDB', link: 'https://www.mongodb.com/' },
    { name: 'Prestashop', link: '' },
    { name: 'Wordpress', link: '' },
    { name: 'tailwind', link: 'https://tailwindcss.com/' },
    { name: 'React Native', link: '' },
    { name: 'REST API', link: '' },
    { name: 'SQL', link: '' },
    { name: 'Git', link: '' },
    { name: 'Gitlab', link: '' },
    { name: 'Figma', link: '' },
    { name: 'YouTrack', link: '' },
    { name: 'Linux', link: '' },
]

export const employment = [
    {
        name: 'ReCodeIT - Full Stack Developer',
        technologies: ['React', 'TypeScript', 'Sass', 'MongoDB', 'Node'],
        description: 'Rozwijanie serwisu internetowego Dyktanda.pl. - tworzenie gier logicznych odstrony interfejsu użytkownika, obsługi kreacji poziomów w cms oraz zapisywania, porównywania i oceniania wyników przejść w części backendowej projektu.',
        time: '10.2021-12.2021',
        logo: 'recodeit.png',
    },
    {
        name: 'Printbox - Frontend Developer',
        technologies: ['React', 'TypeScript', 'Sass', 'MongoDB', 'Node', "Prestashop", "Wordpress", "Next.js", "Jest", "Cypress", "Figma", "Gitlab", "Youtrack", "Linux"],
        description: 'Tworzenie redesignów ścieżek zakupowych klientów w oparciu o projekty graficzne. Pisanie customowych komponentów Reactowych obsługiwanych z poziomu cms. Tworzenie skryptów sterujących personalizacją cech produktów na ścieżkach zakupowych. Dodawanie analityki. Tworzenie testów A/B. Pisanie testów automatycznych i jednostkowych (Jest, Cypress). Rozwój strony firmowej w Next.js. Wprowadzanie zmian oraz optymalizacji pod kątem SEO w wordpressie.',
        time: '05.2022 – 07.2024',
        logo: 'printbox.png',
    }
]

export const contactData = {
    email: 'adamkosciukiewiczkontakt@gmail.com',
    phone: '537135840',
    github: 'https://github.com/Adam-Kosciukiewicz',
    linkedIn: "https://www.linkedin.com/in/adam-ko%C5%9Bciukiewicz-b77a7a23a/"
}