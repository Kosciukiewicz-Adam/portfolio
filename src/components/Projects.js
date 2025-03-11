import React, { useEffect } from 'react'
import Aos from 'aos'

import { projects } from '../data'

import '../styles/projects.sass'
import 'aos/dist/aos.css'

const Projects = ({ forwardRef }) => {
    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, [])
    return (
        <div className='projects-conatiner' ref={forwardRef}>
            <div className='title'>Projekty</div>
            <div className='projects-wrapper'>
                {
                    projects.map(project =>
                        <div
                            className='project'
                            key={project.name}
                            data-aos='fade-up'
                        >
                            <div className='imagesWrapper'>
                                <div className='image first' data-aos='fade-up'>
                                    <img alt='img' src={project.imgs[0]} />
                                </div>
                                <div className='image second' data-aos='fade-up'>
                                    <img alt='img' src={project.imgs[1]} />
                                </div>
                                <div className='image third' data-aos='fade-up'>
                                    <img alt='img' src={project.imgs[2]} />
                                </div>
                            </div>

                            <div className='description'>
                                {project.isComercial && <div className='comercialBand'>Projekt komercyjny</div>}
                                <div className='title'>
                                    {project.name}
                                </div>
                                <div className='text'>{project.description}</div>
                                <div className='skills-wrapper'>
                                    {project.skills.map(skill => (
                                        <div
                                            className={`skill ${skill.name}`}
                                            key={skill.name + project.name}
                                        >
                                            <img alt='skill' src={skill.imageSrc} />
                                            <div className='label'>{skill.name}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className='buttonWrapper'>
                                    <div className='button' onClick={() => window.open(project.linkDemo, "_blank")}>
                                        Sprawdź
                                    </div>
                                    {project?.linkRepo && (
                                        <div className='button' onClick={() => window.open(project.linkRepo, "_blank")}>
                                            Repozytorium
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    )
}

export default Projects