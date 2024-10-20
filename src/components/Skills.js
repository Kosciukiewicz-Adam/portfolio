import React, { useEffect } from 'react'
import Aos from 'aos'

import { skills } from '../data'

import '../styles/skills.sass'
import 'aos/dist/aos.css'

const Skills = ({ forwardRef }) => {
    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, [])
    return (
        <div className='skills-container' ref={forwardRef}>
            <div className='description'>
                <div className='title'>Umiejętości</div>
            </div>
            <div className='skills-wrapper'>
                {
                    skills.map(skill =>
                        <div
                            data-aos='fade-up'
                            className='skill'
                            key={skill.name}
                        >
                            <img alt='skill' src={`./assets/${skill.name}.png`} />
                            <div className='label'>{skill.name}</div>
                        </div>)
                }
            </div>
        </div>
    )
}

export default Skills