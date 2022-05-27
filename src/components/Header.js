import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import { toBeRequired } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';
import '../styles/Header.css';
import Navbar from './Navbar.js';
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import ContactoPages from '../Pages/ContactoPages';
import ProyectosPages from '../Pages/ProyectosPages';





function Header(){
    return (
        <header className='header-contenedor'>
            <div className="menu-btn" id = "btn-menu">
            <AiOutlineMenu/>
            </div>
            <div className='redes'>
            <div className='red'>
                <a href='#'>
                <FaYoutube />
                </a>
              </div>

              <div className='red'>
                <a href='https://www.instagram.com/ginob.jpg/'>
                <FaInstagram />
                </a>
              </div>

              <div className='red'>
                <a href='https://twitter.com/GinoBoca1"'>
                <FaTwitter />
                </a>
              </div>

              <div className='red'>
                <a href='https://www.linkedin.com/in/gino-bocacorsicopicolino-7b983121b/'>
                <AiFillLinkedin />
                </a>
              </div>
            </div>

            <div>
                <img
                 className='logotype'
                 src={require('../images/mkbhd.webp')}
                 alt='mkbhd-logo'
                 />
            </div>
 
            <div className='navbar-container'>
              <Router>
                <Navbar menu = 'Home' proyectos = 'Proyectos' contacto = "Contacto"/>
                <Routes>
                  <Route path="/src/Pages/ProyectosPages.js" element={<ProyectosPages />} />
                  <Route path="/src/Pages/ContactoPages.js" element={<ContactoPages />} />
                </Routes>
              </Router>  
            </div>
        </header>
        
    )
}



export default Header;