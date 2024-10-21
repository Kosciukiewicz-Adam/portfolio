import React from "react";
import '../styles/home.sass';
import { contactData } from "../data";
import github from "../assets/github.png";
import resume from "../assets/resume.svg";
import arrow from "../assets/arrow.svg"

const Home = ({ forwardRef, next }) => {
    return (
        <div className='home-container' ref={forwardRef}>
            <div className='fast-access'>
                <img
                    onClick={() => window.open(contactData.github, '_blank')}
                    src={github}
                    alt='icon'
                />
                <img
                    onClick={() => window.open('./assets/cv.pdf', '_blank')}
                    src={resume}
                    alt='icon'
                />
            </div>
            <div className='content'>
                <div className='title'>Junior Front-End Developer</div>
                <div className='sub-title'>Adam Kościukiewicz</div>
                <div className='fast-access-mobile'>
                    <img
                        onClick={() => window.open(contactData.github, '_blank')}
                        src={github}
                        alt='icon'
                    />
                    <img
                        onClick={() => window.open('./assets/cv.pdf', '_blank')}
                        src={resume}
                        alt='icon'
                    />
                </div>
                <div
                    onClick={() => next.current.scrollIntoView({ block: 'center', behavior: 'smooth' })}
                    className='button'
                >
                    <img alt='button' src={arrow}></img>
                </div>
            </div>
        </div>
    )
}
export default Home