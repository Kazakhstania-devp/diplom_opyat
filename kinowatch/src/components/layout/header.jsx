import React from 'react';
import {  BrowserRouter as Router ,Switch, Route, Link} from "react-router-dom";
import  Logo from '../../images/KinoWatch.png';
import Search from '../searchBar/search.jsx';
import  '../route/route.jsx';

function Header (props){
    return(
        <header className = "header__app header"> 
            <Router>
            <Link to="/Home" className="header__logo">
                <img src={Logo} />
            </Link>
            <ul className = "header__menu">
                <li className = "menu__item"><Link to="/Home">Home</Link></li>
                <li className = "menu__item"><Link to="/New">New</Link></li>
                <li className = "menu__item"><Link to="/Movies">Movies</Link></li>
                <li className = "menu__item"><Link to="/Anime">Anime</Link></li>
                <li className = "menu__item"><Link to="/List">My list</Link></li>
            </ul>
            </Router>  
                      
            <Search/>
            
        </header>   
    )
}



export default Header;