import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { skills, experiences, certificates } from '../constants';
import CTA from '../components/CTA';

import profilePhoto from '../assets/images/profile_photo.png';

import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hola, Soy <span className='blue-gradient_text font-semibold drop-shadow-sm'>
        Juan Contreras</span>
      </h1>

      <div className="mt-5 flex flex-col lg:flex-row items-center gap-5 text-slate-500">
        <div className="flex-1">
          <p>
          Me apasiona la creación de soluciones innovadoras y cuento con habilidades en gestión, 
          organización y trabajo en equipo. Mi experiencia en equipos dinámicos ha fortalecido mi 
          capacidad de comunicación y colaboración. Siempre estoy en busca de nuevas oportunidades para 
          aprender y crecer, comprometido con la mejora continua y la excelencia profesional.
          </p>
        </div>

        <div className="flex justify-center items-center flex-1">
          <img src={ profilePhoto } alt="My Image" className="w-full max-w-xs h-auto rounded-full object-cover" />
        </div>
      </div>

      <hr className='border-slate-200 mt-10'/>

      <div className="flex flex-wrap justify-between gap-10 my-10 ">
        {/* Misión Section */}
        <div className="flex-1 flex flex-col items-start">
          <h3 className="subhead-text">
            Mis<span className='blue-gradient_text font-semibold drop-shadow-sm'>ión</span>
          </h3>
          <p className="text-left mt-4 text-slate-500">
            Resolver problemas y agilizar procesos con tecnología, mejorando continuamente mis habilidades técnicas y académicas. 
            Aspiro a ser ingeniero de software especializado en inteligencia artificial para ofrecer soluciones web que 
            faciliten la vida cotidiana y apoyar a mi familia, siempre enfocándome en la mejora continua y 
            aplicando mis conocimientos en desarrollo backend.
          </p>
        </div>

        {/* Visión Section */}
        <div className="flex-1 flex flex-col items-end">
          <h3 className="subhead-text">
            <span className='blue-gradient_text font-semibold drop-shadow-sm'>Vis</span>ión

            </h3>
          <p className="text-right mt-4 text-slate-500">
            Aspiro a crecer como desarrollador senior en inteligencia artificial y fundar un negocio tecnológico para ofrecer 
            soluciones innovadoras. Mi meta es mejorar sistemas y estrategias en su empresa, perfeccionar mi comunicación con 
            los clientes, y asegurar que mis soluciones sean accesibles y tengan un impacto positivo.
          </p>
        </div>
      </div>

      <hr className='border-slate-200 mt-10'/>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>Habilidades y Servicios</h3>
        <p className="text-left mt-4 text-slate-500">
            Descubre los lenguajes de programacion que domino y los servicios que puedo ofrecer.
          </p>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl'/>
              <div className='btn-front rounded-xl flex justify-center
              items-center'>
                <img 
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className='border-slate-200 mt-10'/>

      <div className='py-16'>
          <h3 className='subhead-text'>Experiencia</h3>
        
          <div className='mt-12 flex'>
            <VerticalTimeline>
              {experiences.map((experience) => (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  icon={
                    <div className='flex justify-center items-center
                    w-full h-full'>
                      <img 
                        src={experience.icon}
                        alt={experience.company_name}
                        className='w-[60%] h-[60%] object-contain'
                      />
                    </div>
                  }
                  iconStyle={{ background: experience.iconBg}}
                  contentStyle={{
                    borderBottom: '8px',
                    borderStyle: 'solid',
                    borderBottomColor: experience.iconBg,
                    boxShadow: 'none',
                  }}
                >
                  <div>
                    <h3 className='text-black text-xl font-poppins
                    font-semibold'>
                      {experience.title}
                    </h3>
                    <p className='text-black-500 font-medium font-base'
                    style={{margin:0}}>
                      {experience.company_name}
                    </p>
                  </div>

                  <ul className='my-5 list-disc ml-5 space-y-2'>
                    {experience.points.map((point, index) => (
                      <li key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'>
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
      </div>

      <hr className='border-slate-200 mt-2'/>
      
      <h3 className='subhead-text mt-10'>Certificados</h3>

      <div className='flex flex-wrap my-6 gap-16'>
        
        {certificates.map((certificate, index) => (
          <div className="lg:w-[400px] w-full" key={index}>
        
            <div className="mt-2 flex flex-col">
              <h4 className="text-xl font-poppins font-semibold">
                {certificate.title}
              </h4>
              <p className="mt-2 text-x text-slate-500">
                {certificate.company_name}
              </p>
              <p className="mt-2 text-x text-slate-500">
                {certificate.date}
              </p>
            </div>

            <div className="block-container w-full h-full mt-3">
              <img
                src={certificate.certificate}
                alt={`Certificate ${index + 1}`}
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center text-slate-600">
        <h2 className="text-xl font-semibold mb-5">Contact <span className='blue-gradient_text font-semibold drop-shadow-sm'>
        Information</span></h2>
      
        <div className="flex flex-col gap-3">
          <a href="https://www.linkedin.com/in/juan-contreras-265317257/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-300">
            <FaLinkedin className="text-2xl" />
            <span className="text-lg">linkedin.com/in/Juan-Contreras</span>
          </a>
          
          <a href="https://github.com/Mizamarzes" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gray-800 transition-colors duration-300">
            <FaGithub className="text-2xl" />
            <span className="text-lg">github.com/Mizamarzes</span>
          </a>
          
          <a href="mailto:mizamarzes@gmail.com" className="flex items-center gap-2 hover:text-red-600 transition-colors duration-300">
            <FaEnvelope className="text-2xl" />
            <span className="text-lg">mizamarzes@gmail.com</span>
          </a>
        </div>
    </div>

      <hr className='border-slate-200 mt-10'/>

      <CTA />
    </section>
  )
}

export default About