import { 
    this_dev,
    facialrecogGif,
    crmGif,
    diploma_comfenalco,
    diploma_platzi_ing_soft,
    campus_logo
} from "../assets/images";

import {
    css,
    git,
    github,
    html,
    javascript,
    java,
    spring,
    mysql,
    postgres,
    python,
    linux,
    crm,
    facialrecog,
    plane,
    university,
    restaurant
} from "../assets/icons";

export const skills = [
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: spring,
        name: "Spring",
        type: "Backend",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Backend",
    },
    {
        imageUrl: postgres,
        name: "postgres",
        type: "Backend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: linux,
        name: "Linux",
        type: "Kernel",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
];

export const certificates = [
    {
        title: "Diplomado Fundamentos Basicos de PHP, CSS y HTML",
        company_name: "Fundacion Universitaria Comfenalco Santander",
        certificate: diploma_comfenalco,
        date: "17 de Mayo de 2023",
    },
    {
        title: "Fundamentos de Ingeneria de Software",
        company_name: "Platzi",
        certificate: diploma_platzi_ing_soft,
        date: "8 de Junio de 2023",
    },
]

export const experiences = [
    {
        title: "Backend Developer",
        company_name: "Campuslands",
        icon: campus_logo,
        iconBg: "#418af3",
        date: "Noviembre 2023 - Septiembre 2024",
        points: [
            "Creé y gestione aplicaciones web completas con tecnologias Frontend como HTML, CSS y JavaScript",
            "Desarrolle proyectos utilizando Git para control de versiones y metodologias agiles como SCRUM para el trabajo en equipo.",
            "Aprendi y aplique tecnologias de backend como Java y Spring Boot, bases de datos como MySQL y PostGreSQL.",
            "Desarrolle mis habilidades blandas y el uso de una segunda lengua como Ingles que me ayudaron a completar mis tareas con exito.",
        ],
    },
    {
        title: "Backend Developer",
        company_name: "this.dev",
        icon: this_dev,
        iconBg: "#f59580",
        date: "diciembre 2023 - Septiembre 2024",
        points: [
            "Formé parte de una iniciativa colaborativa junto a cuatro programadores, donde el objetivo principal fue desarrollar proyectos con un impacto empresarial significativo..",
            "Como desarrollador backend, me enfoqué en el mantenimiento y creación de bases de datos, garantizando la integridad y eficiencia de la información almacenada.",
            "También fui responsable de verificar la información proporcionada por los clientes, asegurando que los inputs fueran correctos y optimizando la experiencia del usuario final.",
            "El trabajo en equipo fue clave para el éxito de estos proyectos, permitiendo un avance constante y asegurando que cada miembro contribuyera con sus fortalezas.",
        ],
    },
    
];

export const projects = [
    {
        iconUrl: crm,
        theme: 'btn-back-red',
        name: 'CRM Hooy',
        description: 'Desarrollo de plataforma CRM con funcionalidad de envío masivo de mensajes con Javascript, Java Spring Boot, MySQL y AWS.',
        link: '',
        gifUrl: crmGif,
    },
    {
        iconUrl: facialrecog,
        theme: 'btn-back-blue',
        name: 'Facial Recognition',
        description: 'Plataforma web de reconocimiento facial a través de imágenes potenciado con IA, Python, AWS y Javascript.',
        link: '',
        gifUrl: facialrecogGif,
    },
    {
        iconUrl: plane,
        theme: 'btn-back-red',
        name: 'Agency Global Flights ',
        description: 'Software de gestion de agencia de vuelos con Java y MySQL.',
        link: 'https://github.com/Mizamarzes/AgencyGlobalFlights',
    },
    {
        iconUrl: university,
        theme: 'btn-back-orange',
        name: 'University of the Wise ',
        description: 'Sistema de gestion de una universidad con HTML, CSS y JavaScript.',
        link: 'https://github.com/Mizamarzes/Universidad_proyecto_Javascript',
    },
    {
        iconUrl: restaurant,
        theme: 'btn-back-yellow',
        name: '東のドラゴン',
        description: 'Maquetacion de pagina web para restaurante con HTML y CSS.',
        link: 'https://github.com/Mizamarzes/proyectofinal_html.github.io',
    }
];