import React from 'react';
import {Link} from "react-router-dom";
import  Logo from '../../images/KinoWatch.png';
import Search from '../SearchBar/Search';
import  '../../routes';

function Header (props){
    return(
        <header className = "header__app header block__inner"> 
            <Link to="/Home" className="header__logo">
                <img src={Logo} />
            </Link>
            <ul className = "header__menu">
                <li className = "menu__item"><Link to="/Home">Home</Link></li>
                <li className = "menu__item"><Link to="/New">New</Link></li>
                <li className = "menu__item"><Link to="/Movies">Movies</Link></li>
                <li className = "menu__item"><Link to="/Anime">Anime</Link></li>
                <li className = "menu__item"><Link to="/ListPage">My list</Link></li>
            </ul>
            <Search></Search>     
            
        </header>   
    )
}



export default Header;