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
              <a href='/'>{props.menu}</a>
              <a href='/https://github.com/Ginoboca1?tab=repositories'> <FaGithub />{props.proyectos}</a>
              <a href='/contacto'> <SiGooglemessages />{props.contacto}</a>
           </div>
           <div className='line'></div>
         </div>
        </div>
    )
}

export default Portada;