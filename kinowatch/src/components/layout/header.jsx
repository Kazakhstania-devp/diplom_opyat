import React from 'react';
import  Logo from '../../images/KinoWatch.png'



function Header (props){
    return(
        <header className = "header__app header">
            <a href="#" className="header__logo">
                <img src={Logo} />
            </a>
            <ul className = "header__menu">
                <li className = "menu__item link--active"><a href = "#">Home</a></li>
                <li className = "menu__item"><a href = "#">New</a></li>
                <li className = "menu__item"><a href = "#">Movies</a></li>
                <li className = "menu__item"><a href = "#">Anime</a></li>
                <li className = "menu__item"><a href = "#">My list</a></li>
            </ul>

        </header>
    )
}

export default Header;