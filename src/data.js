import calculator1 from "./assets/calculator1.PNG";
import calculator2 from "./assets/calculator2.PNG";
import prestashop from "./assets/prestashop.png";
import typescript from "./assets/TypeScript.png";
import javascript from "./assets/JavaScript.png";
import experience from "./assets/experience.png";
import wordpress from "./assets/wordpress.png";
import tailwind from "./assets/tailwind.png";
import youtrack from "./assets/YouTrack.png";
import recodeit from "./assets/recodeit.png";
import famille1 from "./assets/famille1.PNG";
import famille2 from "./assets/famille2.PNG";
import famille3 from "./assets/famille3.PNG";
import printbox from "./assets/printbox.png";
import restApi from "./assets/REST API.png";
import rappel3 from "./assets/rappel3.png";
import rappel2 from "./assets/rappel2.png";
import express from "./assets/express.png";
import cypress from "./assets/cypress.png";
import mongodb from "./assets/MongoDB.png";
import rappel1 from "./assets/rappel.png";
import github from "./assets/github.png";
import gitlab from "./assets/Gitlab.png";
import jquery from "./assets/jQuery.png";
import python from "./assets/python.png";
import famille from "./assets/logo.png";
import linux from "./assets/linux.png";
import figma from "./assets/figma.png";
import react from "./assets/React.png";
import topo1 from "./assets/topo1.PNG";
import topo2 from "./assets/topo2.PNG";
import topo3 from "./assets/topo3.PNG";
import html from "./assets/html.png";
import jest from "./assets/jest.png";
import next from "./assets/next.png";
import node from "./assets/Node.png";
import sass from "./assets/SASS.png";
import sql from "./assets/SQL.png";

export const menuLinks = [
    {
        name: {
            PL: 'Home', ENG: 'Home'
        },
        scrollTo: 'home'
    },
    {
        name: {
            PL: 'Projekty', ENG: 'Projects'
        },
        scrollTo: 'projects'
    },
    {
        name: {
            PL: 'Doświadczenie', ENG: 'Experience'
        },
        scrollTo: 'work'
    },
    {
        name: {
            PL: 'Umiejętości', ENG: 'Skills'
        },
        scrollTo: 'skills'
    },
    {
        name: {
            PL: 'Kontakt', ENG: 'Contact'
        },
        scrollTo: 'contact'
    },
]

export const projects = [
    {
        imgs: [topo1, topo2, topo3],
        name: "Topo",
        skills: [
            { name: 'TypeScript', imageSrc: typescript },
            { name: 'MongoDB', imageSrc: mongodb },
            { name: 'express', imageSrc: express },
            { name: 'React', imageSrc: react },
            { name: 'Python', imageSrc: python },
        ],
        description: {
            PL: "Serwis informacyjny o regionach i drogach wspinaczkowych na całym świecie. Posiada możliwość wyboru sektorów z listy umożliwiającej wiele sposobów sortowania lub odszukiwanie ich przy pomocy interaktywnej mapy",
            ENG: "Interactive rock climbing website providing informations about climbing areas around the wourld and climbing routes. Features rich descriptions, interactive map and advanced search tools",
        },
        linkRepo: "https://github.com/Kosciukiewicz-Adam/topo",
        linkDemo: "https://kosciukiewicz-adam.github.io/topo/"
    },
    {
        imgs: [famille1, famille2, famille3],
        name: "Famille",
        skills: [
            { name: 'TypeScript', imageSrc: typescript },
            { name: 'MongoDB', imageSrc: mongodb },
            { name: 'express', imageSrc: express },
            { name: 'React', imageSrc: react },
            { name: 'Figma', imageSrc: figma },
        ],
        description: {
            PL: "Strona dla firmy zajmującej się opieką nad osobami starszymi. Zlecenie objęło wykonanie projektu graficznego strony w figmie, wykonanie strony internetowej, stwożenie customowego CMSa umożliwiającego zmianę treści, zdjęć oraz projstą customizacje strony oraz optymalizacje pod kątem SEO. Strona jest dostępna w 5 różnych wersjach językowych.",
            ENG: "A website for a company providing care for the elderly. The project included creating a graphic design in Figma, developing the website, building a custom CMS that allows editing content, images, and simple customization of the site, as well as SEO optimization. The website is available in five different language versions.",
        },
        isComercial: true,
        linkDemo: "https://www.famille.pl/"
    },
    {
        imgs: [rappel1,rappel2, rappel3],
        name: "Rappel",
        skills: [
            { name: 'React Native', imageSrc: react },
        ],
        description: {
            PL: "Aplikacja do treningu interwałowego. Umożliwia tworzenie i zarządzanie własnymi presetami, zaawansowane wsparcie w treningu i szerokie możliwości dostosowania",
            ENG: "This mobile application is designed for interval training for climbing enthusiasts. Currently in internal testing, the app is being developed as a commercial product and will eventually be released on Google Play."
        },
        isComercial: true,
        //linkRepo: "https://github.com/Kosciukiewicz-Adam/calculator"
    },
    {
        imgs: [calculator2,calculator1],
        name: "Kalkulator",
        skills: [
            { name: 'Python', imageSrc: python },
        ],
        description: {
            PL: "Kalkulator korzystający z własnych metod o obsługi obliczeń. Umożliwa dodawnie, mnożenie, dzielenie, odejmowanie. Obsługuje liczby z wartościami po przecinku jak również jednoczesne wykonywanie działań.",
            ENG: "Calculator using custom methods for handling calculations. It supports addition, multiplication, division, and subtraction. It handles decimal numbers as well as simultaneous execution of multiple operations."
        },
        isComercial: false,
        linkRepo: "https://github.com/Kosciukiewicz-Adam/calculator"
    }
]

export const skills = [
    { name: 'SASS', imageSrc: sass },
    { name: 'JavaScript', imageSrc: javascript },
    { name: 'HTML', imageSrc: html },
    { name: 'JQuery', imageSrc: jquery },
    { name: 'TypeScript', imageSrc: typescript },
    { name: 'Python', imageSrc: python },
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
        name: {
            PL: 'ReCodeIT - Full Stack Developer - 8 miesięcy',
            ENG: 'ReCodeIT - Full Stack Developer - 8 months',
        },
        technologies: ['React', 'TypeScript', 'Sass', 'MongoDB', 'Node'],
        description: {
            PL: 'Rozwijanie serwisu internetowego Dyktanda.pl. - tworzenie gier logicznych odstrony interfejsu użytkownika, obsługi kreacji poziomów w cms oraz zapisywania, porównywania i oceniania wyników przejść w części backendowej projektu. Przeprowadzenie integracji z serwisem mailingowym. Wprowadzenie modułu kodów promocyjnych na subskrypcje dla użytkowników',
            ENG: 'Independent development of new features for the online service Dyktanda.pl: Logical Games – designed and created the UI, developed and implemented game mechanics, built a backend system for score saving, and added game and level management tools for the website administrator within the CMS.Discount Codes – developed tools for creating and managing discount codes in the CMS,designed the website UI for code usage, and integrated the system with the payment gateway.Mailing Platform Integration – implemented seamless integration with the mailing platform toenhance communication capabilities.'
        },
        time: '10.2021-05.2022',
        logo: recodeit,
    },
    {
        name: {
            PL: 'Printbox - Frontend Developer - 2 lata i 2 miesiące',
            ENG: 'Printbox - Frontend Developer - 2 yeas, 2 months',
        },
        technologies: ['React', 'TypeScript', 'Sass', 'MongoDB', 'Node', "Prestashop", "Wordpress", "Next.js", "Jest", "Cypress", "Figma", "Gitlab", "Youtrack", "Linux"],
        description: {
            PL: 'Tworzenie redesignów ścieżek zakupowych klientów w oparciu o projekty graficzne. Pisanie customowych komponentów Reactowych obsługiwanych z poziomu cms. Tworzenie skryptów sterujących personalizacją cech produktów na ścieżkach zakupowych. Dodawanie analityki. Tworzenie testów A/B. Pisanie testów automatycznych i jednostkowych (Jest, Cypress). Rozwój strony firmowej w Next.js. Wprowadzanie zmian oraz optymalizacji pod kątem SEO w wordpressie.',
            ENG: "Creating redesigns of buing paths according to Figma designs. Creating configuration scripts that manage the behavior of buing paths elements and adjust the availability of product attributes. Adding analytics, implementing A/B testing, writing unit and automated tests. Creating reusable, components with implemented ability of deep customization by clients via CMS. Developing company websites, including SEO optimizations.",
        },
        time: '05.2022 – 07.2024',
        logo: printbox,
    },
    {
        name: {
            PL: "Fundacja KAPITAŁ DLA INNOWACJI - 4 miesiące",
            ENG: "Fundacja KAPITAŁ DLA INNOWACJI - 4 months",
        },
        technologies: ["Generator wniosków IGA"],
        description: {
            PL: "Praca nad wnioskami o dofinansowanie projektów bezpośrednio związanych z sektorem IT: Udział w przygotowaniu wniosku do Małopolskiego Centrum Przedsiębiorczości o dofinansowanie prac rozwojowych o charakterze eksperymentalnym w zakresie oprogramowania komputerowego, w ramach konkursu „Fundusze Europejskie dla Małopolski 2021-2027”, Działanie 1.1: Projekty badawczo-rozwojowe przedsiębiorstw. Tytuł projektu: „Zakupy360.ai – otwarta platforma sourcingowa dla przedsiębiorstw B2B”. Prace realizowane z wykorzystaniem generatora wniosków w systemie IGA. Udział w przygotowaniu wniosku do Polskiej Agencji Rozwoju Przedsiębiorczości o dofinansowanie udziału w międzynarodowych targach i misjach gospodarczych w USA, Europie i na Tajwanie, w ramach Działania FENG 2.25: Promocja marki innowacyjnych MŚP. Tytuł projektu: „Udział WILK ELEKTRONIK S.A. w wydarzeniach wspierających promocję produktów oraz rozwój działań eksportowych”. Prace realizowane z wykorzystaniem generatora wniosków w systemie LSI.",
            ENG: "Working on applications related to project funding directly connected to the IT sector: Participation in the preparation of an application to the Małopolska Centre for Entrepreneurship for funding experimental development work in the field of computer software, as part of the “European Funds for Małopolska 2021-2027” competition, Measure 1.1: Research and Development Projects of Enterprises. Project title: “Zakupy360.ai – an open sourcing platform for B2B enterprises.” Work conducted using the application generator within the IGA system. Participation in the preparation of an application to the Polish Agency for Enterprise Development for funding participation in international trade fairs and economic missions in the USA, Europe, and Taiwan, as part of Measure FENG 2.25: Promotion of the Brand of Innovative SMEs. Project title: “Participation of WILK ELEKTRONIK S.A. in events supporting product promotion and the development of export activities.” Work conducted using the application generator within the LSI system. ",
        },
        time: ' 12.2024 - 02.2025 & 05.2025 - 06.2025',
        logo: experience,
    },
    {
        name: {
            PL: 'Famille - Full Stack Developer, UI Designer - 3 miesiące',
            ENG: 'Famille - Full Stack Developer, UI Designer - 3 moths'
        },
        technologies: ['React', 'TypeScript', 'Sass', 'MongoDB', 'Node', "Figma", "Github"],
        description: {
            PL: "Wykonanie strony na zlecene dla firmy zajmującej się opieką nad osobami starszymi. Zlecenie objęło wykonanie projektu graficznego strony w figmie, wykonanie strony internetowej famille.pl, stworzenie customowego CMSa umożliwiającego zmianę treści, zdjęć oraz prostą edycje strony i optymalizacje pod kątem SEO. Strona jest dostępna w 5 różnych wersjach językowych.",
            ENG: "Creating a website for Famille, a company specializing in providing caregivers for seniors. The work included designing graphics in Figma, developing the website (https://www.famille.pl/), performing SEO optimizations, and building a custom CMS from scratch. The CMS allows managing website content, adjusting customization settings, enabling or disabling website components, uploading and updating images, managing SEO. The website is available in five languages."
        },
        time: '12.2024 – 02.2025',
        logo: famille,
    },
    {
        name: {
            PL: 'Analityk systemowy - 3 miesiące',
            ENG: 'Analityk systemowy - 3 months',
        },
        description: {
            PL: 'Stworzenie specyfikacji wymagań użytkownika i wymagań funkcjonalnych dla branżowego oprogramowania do świadczenia usług drogą elektroniczną w modelu SaaS. Zbieranie danych koniecznych do stworzenia specyfikacji na podstawie analizy narzędzi dostępnych na rynku oraz rozmów z klientem. Tworzenie specyfikacji w oparciu o zebrane dane oraz kilkuletnie doświadczenie programistyczne. Projekt jest nadal kontynuowany.',
            ENG: "Creating user requirements and functional specifications for industry-specific software providing services electronically in a SaaS model. Collecting necessary data for the specification based on the analysis of available market tools and discussions with the client. Developing the specification based on the gathered data and several years of programming experience. The project is still ongoin",
        },
        time: '02.2025 – 04.2025',
        logo: experience,
    }
]

export const contactData = {
    email: 'adamkosciukiewiczkontakt@gmail.com',
    phone: '537135840',
    github: 'https://github.com/Kosciukiewicz-Adam',
    linkedIn: "https://www.linkedin.com/in/adam-ko%C5%9Bciukiewicz-b77a7a23a/"
}