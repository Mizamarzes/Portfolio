import { meta, shopify, starbucks, tesla, this_dev } from "../assets/images";
import {
    car,
    contact,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    pricewise,
    react,
    snapgram,
    summiz,
    threads,
    java,
    spring,
    mysql,
    postgres,
    python,
    linux
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

export const experiences = [
    {
        title: "Backend Developer",
        company_name: "this.dev",
        icon: this_dev,
        iconBg: "#f59580",
        date: "dic 2023",
        points: [
            "Formé parte de una iniciativa colaborativa junto a cuatro programadores, donde el objetivo principal fue desarrollar proyectos con un impacto empresarial significativo..",
            "Como desarrollador backend, me enfoqué en el mantenimiento y creación de bases de datos, garantizando la integridad y eficiencia de la información almacenada.",
            "También fui responsable de verificar la información proporcionada por los clientes, asegurando que los inputs fueran correctos y optimizando la experiencia del usuario final.",
            "El trabajo en equipo fue clave para el éxito de estos proyectos, permitiendo un avance constante y asegurando que cada miembro contribuyera con sus fortalezas.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'CRM Hooy',
        description: 'Desarrollo de plataforma CRM con funcionalidad de envío masivo de mensajes con Javascript, Java Spring Boot, MySQL y AWS.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-green',
        name: 'Facial Recognition',
        description: 'Plataforma web de reconocimiento facial a través de imágenes potenciado con IA, Python, AWS y Javascript.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Agency Global Flights ',
        description: 'Software de gestion de agencia de vuelos con Java y MySQL.',
        link: 'https://github.com/Mizamarzes/AgencyGlobalFlights',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'University of the Wise ',
        description: 'Sistema de gestion de una universidad con HTML, CSS y JavaScript.',
        link: 'https://mizamarzes.github.io/Universidad_proyecto_Javascript/#',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-yellow',
        name: '東のドラゴン',
        description: 'Maquetacion de pagina web para restaurante con HTML y CSS.',
        link: 'https://mizamarzes.github.io/proyectofinal_html.github.io/#seccion-home',
    }
];