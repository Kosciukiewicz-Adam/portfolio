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
            <div
                className='projects-wrapper'
                data-aos='zoom-in'
                data-aos-anchor-placement="center-bottom"
            >
                {
                    projects.map(project =>
                        <div className='project' key='project'>
                            <div className='frame'>
                                <img alt='img' src={`./assets/${project.imgs[0]}`} />
                            </div>

                            <div className='description'>
                                <div className='title'>{project.name}</div>
                                <div className='skills'>
                                    {project.skills.map(skill => <div className='skill' key={skill}>{skill}</div>)}
                                </div>
                                <div className='text'>{project.description}</div>
                                <div className='buttonWrapper'>
                                    <div className='button' onClick={() => window.open(project.linkDemo, "_blank")}>Demo</div>
                                    <div className='button' onClick={() => window.open(project.linkRepo, "_blank")}>Repo</div>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    )
}

export default Projects