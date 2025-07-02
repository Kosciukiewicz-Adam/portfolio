import React from "react";

import { menuLinks } from "../data";

import '../styles/menu.sass'

const PhoneMenu = (props) => {

    const handleClick = (to) => {
        props.setShowMenu(false)
        props?.[to].current.scrollIntoView({
            behavior: 'smooth', block: 'center'
        })
    }

    return(
        <div className='phone-menu'>
            {
                menuLinks.map(link=>
                <div 
                    onClick={()=> handleClick(link.scrollTo)}
                    className='phone-menu-link'
                    key={link.scrollTo}
                >
                    {link.name[props.selectedLanguage]}
                </div>)
            }
        </div>
    )
}

export default PhoneMenu