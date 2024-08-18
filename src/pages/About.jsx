import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { skills, experiences } from '../constants';
import CTA from '../components/CTA';

import profilePhoto from '../assets/images/profile_photo.png';

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
          Mi objetivo es resolver problemas y agilizar procesos con tecnología, mejorar mis habilidades y 
          obtener mi título en ingeniería de software con especialización en inteligencia artificial. 
          Aspiro a ayudar a mi familia, formar mi propio negocio, y ofrecer soluciones rápidas a través de 
          aplicaciones web que mejoren la vida diaria. Quiero crecer como desarrollador senior y perfeccionar 
          mis habilidades para ofrecer soluciones claras y efectivas.
          </p>
        </div>

        <div className="flex justify-center items-center flex-1">
          <img src={ profilePhoto } alt="My Image" className="w-full max-w-xs h-auto rounded-full object-cover" />
        </div>
    </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

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

      <div className='py-16'>
          <h3 className='subhead-text'>Work Experience</h3>
        
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

      <hr className='border-slate-200'/>

      <CTA />
    </section>
  )
}

export default About