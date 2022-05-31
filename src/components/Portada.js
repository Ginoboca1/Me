import React from 'react';
import '../styles/Portada.css';
import { SiGooglemessages } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Portada(props){
    return(
        <div className='portada-container'>
          <div className='text-container'>
           <h1 className='portada-title'>Desarrollo Web</h1>
           <div className='portada-links'>
              <Link to ='/'>{props.menu} </Link>
              <a href ='https://github.com/Ginoboca1?tab=repositories'> <FaGithub />{props.proyectos} </a>
              <Link to ='/contacto'> <SiGooglemessages />{props.contacto} </Link>
           </div>
           <div className='line'></div>
         </div>
        </div>
    )
}

export default Portada;