import prestashop from "./assets/prestashop.png";
import typescript from "./assets/TypeScript.png";
import javascript from "./assets/JavaScript.png";
import wordpress from "./assets/wordpress.png";
import tailwind from "./assets/tailwind.png";
import youtrack from "./assets/YouTrack.png";
import recodeit from "./assets/recodeit.png";
import printbox from "./assets/printbox.png"
import express from "./assets/express.png";
import restApi from "./assets/REST API.png";
import cypress from "./assets/cypress.png";
import mongodb from "./assets/MongoDB.png";
import github from "./assets/github.png";
import gitlab from "./assets/Gitlab.png";
import jquery from "./assets/jQuery.png";
import linux from "./assets/linux.png";
import figma from "./assets/figma.png";
import react from "./assets/React.png";
import topo1 from "./assets/topo1.JPG";
import topo2 from "./assets/topo2.JPG";
import topo3 from "./assets/topo3.JPG";
import html from "./assets/html.png";
import jest from "./assets/jest.png";
import next from "./assets/next.png";
import node from "./assets/Node.png";
import sass from "./assets/SASS.png";
import sql from "./assets/SQL.png";

export const menuLinks = [
    { name: 'Home', scrollTo: 'home' },
    { name: 'Umiejętości', scrollTo: 'skills' },
    { name: 'Projekty', scrollTo: 'projects' },
    { name: 'Doświadczenie', scrollTo: 'work' },
    { name: 'Kontakt', scrollTo: 'contact' },
]

export const projects = [
    {
        imgs: [topo1, topo2, topo3],
        name: "Topo",
        skills: ["TypeScript", "Express", "MongoDB"],
        description: "Serwis informacyjny o regionach i drogach wspinaczkowych na całym świecie",
        linkRepo: "https://github.com/Kosciukiewicz-Adam/topo",
        linkDemo: "https://kosciukiewicz-adam.github.io/topo/"
    }
]

export const skills = [
    { name: 'SASS', imageSrc: sass },
    { name: 'JavaScript', imageSrc: javascript },
    { name: 'HTML', imageSrc: html },
    { name: 'JQuery', imageSrc: jquery },
    { name: 'TypeScript', imageSrc: typescript },
    { name: 'React', imageSrc: react },
    { name: 'Next', imageSrc: next },
    { name: 'Node', imageSrc: node },
    { name: 'express', imageSrc: express },
    { name: 'Jest', imageSrc: jest },
    { name: 'Cypress', imageSrc: cypress },
    { name: 'MongoDB', imageSrc: mongodb },
    { name: 'Prestashop', imageSrc: prestashop },
    { name: 'Wordpress', imageSrc: wordpress },
    { name: 'tailwind', imageSrc: tailwind },
    { name: 'React Native', imageSrc: react },
    { name: 'REST API', imageSrc: restApi },
    { name: 'SQL', imageSrc: sql },
    { name: 'Github', imageSrc: github },
    { name: 'Gitlab', imageSrc: gitlab },
    { name: 'Figma', imageSrc: figma },
    { name: 'YouTrack', imageSrc: youtrack },
    { name: 'Linux', imageSrc: linux },
]

export const employment = [
    {
        name: 'ReCodeIT - Full Stack Developer',
        technologies: ['React', 'TypeScript', 'Sass', 'MongoDB', 'Node'],
        description: 'Rozwijanie serwisu internetowego Dyktanda.pl. - tworzenie gier logicznych odstrony interfejsu użytkownika, obsługi kreacji poziomów w cms oraz zapisywania, porównywania i oceniania wyników przejść w części backendowej projektu.',
        time: '10.2021-12.2021',
        logo: recodeit,
    },
    {
        name: 'Printbox - Frontend Developer',
        technologies: ['React', 'TypeScript', 'Sass', 'MongoDB', 'Node', "Prestashop", "Wordpress", "Next.js", "Jest", "Cypress", "Figma", "Gitlab", "Youtrack", "Linux"],
        description: 'Tworzenie redesignów ścieżek zakupowych klientów w oparciu o projekty graficzne. Pisanie customowych komponentów Reactowych obsługiwanych z poziomu cms. Tworzenie skryptów sterujących personalizacją cech produktów na ścieżkach zakupowych. Dodawanie analityki. Tworzenie testów A/B. Pisanie testów automatycznych i jednostkowych (Jest, Cypress). Rozwój strony firmowej w Next.js. Wprowadzanie zmian oraz optymalizacji pod kątem SEO w wordpressie.',
        time: '05.2022 – 07.2024',
        logo: printbox,
    }
]

export const contactData = {
    email: 'adamkosciukiewiczkontakt@gmail.com',
    phone: '537135840',
    github: 'https://github.com/Kosciukiewicz-Adam',
    linkedIn: "https://www.linkedin.com/in/adam-ko%C5%9Bciukiewicz-b77a7a23a/"
}