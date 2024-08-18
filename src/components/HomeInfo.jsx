import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain"/> 
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center
        neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hola, Soy <span className='font-semibold'>Juan Contreras</span>
            <br/>
            Backend Junior Developer de Colombia
        </h1>
    ),
    2: (
        <InfoBox 
            text="¡Te invito a conocer mis habilidades, descubrir mis pasiones 
            y ver qué me motiva en mi camino profesional!"
            link="/about"
            btnText="Descubrir mas"
        />
    ),
    3: (
        <InfoBox 
            text="He trabajado en diversos proyectos en mi camino profesional
            ¿Te gustaría conocerlos? "
            link="/projects"
            btnText="Descubrir mas"
        />
    ),
    4: (
        <InfoBox 
            text="¿Estás buscando un desarrollador? 
            ¡Estoy a solo unos clics de distancia!"
            link="/contact"
            btnText="Contactame"
        />
    ),
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo