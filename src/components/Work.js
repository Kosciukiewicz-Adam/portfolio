import React, { useEffect } from 'react'
import Aos from 'aos'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { employment } from '../data'
import '../styles/work.sass'
import 'aos/dist/aos.css'

const Work = ({ forwardRef }) => {
    // useEffect(() => {
    //     Aos.init({
    //         duration: 1000
    //     });
    // }, [])
    return (
        <div
            className='work-conatiner'
            // data-aos='zoom-in'
            // data-aos-anchor-placement="center-bottom"
            ref={forwardRef}
        >
            <div className='title'>Doświadczenie zawodowe: +3 lata</div>

            <VerticalTimeline>
            {employment.map(work => (
                <VerticalTimelineElement
                    key={work.name}
                    date={work.time}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={work?.logo ? <img alt='work' src={work.logo} /> : <></>}
                >
                    <h3 className="vertical-timeline-element-title">
                        {work.name}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        {work.technologies.map(tech => (
                            <span key={tech} className="skill">
                                {tech}
                            </span>
                        ))}
                    </h4>
                    <p className="vertical-timeline-element-description">
                        {work.description}
                    </p>
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
        </div>
    )
}

export default Work