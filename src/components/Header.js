
import { toBeRequired } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';
import '../styles/Header.css';
import Navbar from './Navbar.js';
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";



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

            <div className = "contenedor-logo">
                <p className='logo'>gnoboc</p>
            </div>
 
            <div className='navbar-container'>
                <Navbar menu = 'Home' proyectos = 'Proyectos' contacto = "Contacto"/>
            </div>
        </header>
        
    )
}



export default Header;