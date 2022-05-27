import React from 'react';
import '../styles/Portada.css';
import { SiGooglemessages } from "react-icons/si";
import { FaGithub } from "react-icons/fa";


function Portada(props){
    return(
        <div className='portada-container'>
          <div className='text-container'>
           <h1 className='portada-title'>Desarrollo Web</h1>
           <div className='portada-links'>
              <a href='/home'>{props.menu}</a>
              <a href='/proyectos'> <FaGithub />{props.proyectos}</a>
              <a href='/contacto'> <SiGooglemessages />{props.contacto}</a>
           </div>
           <div className='line'></div>
         </div>
        </div>
    )
}

export default Portada;