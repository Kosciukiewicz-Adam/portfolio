import React, { useState, useEffect } from "react";
import '../styles/menu.sass'
import { menuLinks } from "../data";
import x from "../assets/x.svg";
import menu from "../assets/menu.svg";

const Menu = (props) => {
    const [current, setCurrent] = useState('home');
    
    useEffect(() => {
        let refArray = Object.entries(props).filter(elem => typeof elem[1] === 'object')

        refArray.forEach(ref => {
            if (props.scroll < 300) {
                setCurrent('home')
            } else if (refArray[refArray.length - 2][1].current.offsetTop <= props.scroll) {
                setCurrent(refArray[refArray.length - 1][0])
            } else if ((Math.round(ref[1].current.offsetTop / 100) * 100) - 200 === Math.round(props.scroll / 100) * 100) {
                setCurrent(ref[0])
            }
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.scroll])

    const handleClick = (to) => {
        props?.[to].current.scrollIntoView({
            behavior: 'smooth', block: 'center'
        })

        setCurrent(to)
    }

    return (
        <>
            <div className={`${props.scroll < 100 ? 'home' : ''} desktop-menu`}>
                <div className="languageSelector">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/960px-Flag_of_Poland.svg.png"
                        className={props.selectedLanguage === "PL" ? "active": ""}
                        onClick={()=> props.setSelectedLanguage("PL")}
                        alt="pl"
                    />
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png"
                        className={props.selectedLanguage === "ENG" ? "active": ""}
                        onClick={()=> props.setSelectedLanguage("ENG")}
                        alt="eng"
                    />
                </div>
                {
                    menuLinks.map(link =>
                        <div
                            className={`link ${current === link.scrollTo ? 'active' : ''}`}
                            key={link.scrollTo}
                            onClick={() => handleClick(link.scrollTo)}
                        >
                            <div className='text'>{link.name[props.selectedLanguage]}</div>
                        </div>
                    )
                }
            </div>
            <div
                onClick={() => props.setShowMenu(!props.showMenu)}
                className='phone-menu-button'
            >
                {props.showMenu ?
                    <img alt='icon' src={x} />
                    :
                    <img alt='icon' src={menu} />
                }
            </div>
        </>
    )
}
export default Menu