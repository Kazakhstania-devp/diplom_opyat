import React from 'react';
import  Logo from '../images/KinoWatch.png'
import  Night from '../images/night.png'


function Header (props){
    return(
        <header className = "header__app header">
            <a href="#" className="header__logo">
                <img src={Logo} />
            </a>
            <ul className = "header__menu">
                <li className = "menu__item"><a href = "#">Home</a></li>
                <li className = "menu__item"><a href = "#">New</a></li>
                <li className = "menu__item">Movies</li>
                <li className = "menu__item">Anime</li>
                <li className = "menu__item">My list</li>
            </ul>
        </header>
    )
}

export default Header;