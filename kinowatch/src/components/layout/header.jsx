import React from 'react';
import {  BrowserRouter as Router ,Switch, Route, Link} from "react-router-dom";
import  Logo from '../../images/KinoWatch.png';
import Search from '../searchBar/search.jsx';
import  '../route/route.jsx';

function Header (props){
    return(
        <header className = "header__app header"> 
            <Router>
            <Link to="/" className="header__logo">
                <img src={Logo} />
            </Link>
            <ul className = "header__menu">
                <li className = "menu__item"><Link to="/">Home</Link></li>
                <li className = "menu__item"><Link to="/">New</Link></li>
                <li className = "menu__item"><Link to="/">Movies</Link></li>
                <li className = "menu__item"><Link to="/">Anime</Link></li>
                <li className = "menu__item"><Link to="/">My list</Link></li>
            </ul>
            </Router>            
            <Search/>
        </header>   
    )
}



export default Header;