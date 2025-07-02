import React, { useEffect } from 'react'
import Aos from 'aos'
import { contactData } from '../data'
import '../styles/contact.sass'
import 'aos/dist/aos.css'

import email from "../assets/email.svg";
import phone from "../assets/phone.svg";
import github from "../assets/github.png";
import linkedIn from "../assets/linkedIn.png";
import cv from "../assets/cv.pdf";


const Contact = ({ forwardRef, selectedLanguage }) => {

    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, [])

    return (
        <div
            className='contact-conatiner'
            data-aos='zoom-in'
            data-aos-anchor-placement="center-bottom"
            ref={forwardRef}
        >
            <div className='title'>
                {selectedLanguage === "ENG" ? "Contact" : "Kontakt"}
            </div>

            <div className='row to-coppy' onClick={() => navigator.clipboard.writeText(contactData.email)}>
                <img src={email} alt='icon' />
                <div className='label'>{contactData.email}</div>
            </div>

            <div className='row to-coppy' onClick={() => navigator.clipboard.writeText(contactData.phone)}>
                <img src={phone} alt='icon' />
                <div className='label'>{contactData.phone}</div>
            </div>

            <div className='row' onClick={() => window.open(contactData.github, '_blank')}>
                <img src={github} alt='icon' />
                <div className='label'>{contactData.github.split('//')[1]}</div>
            </div>

            <div className='row' onClick={() => window.open(contactData.linkedIn, '_blank')}>
                <img src={linkedIn} alt='icon' />
                <div className='label'>LinkedIn</div>
            </div>

            <div
                onClick={() => window.open(cv, '_blank')}
                className='button'
            >
                {selectedLanguage === "ENG" ? "See my resume" : "Obejrzyj moje CV"}
            </div>
        </div>
    )
}

export default Contact