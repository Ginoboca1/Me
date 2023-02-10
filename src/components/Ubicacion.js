import React from 'react';
import '../styles/Ubicacion.css';
import { MdRoom } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { AiFillLinkedin } from "react-icons/ai";



function Ubicacion (){
    return(
        <div className='contenedor'>
          <div className='ubicacion-contenedor'>
            <i className='icon-map'><MdRoom/></i>
            <h4>Rosario, Argentina.</h4>
          </div>

          <div className='redes-contenedor'>
            <ul className='redess'>
                <li>
                  <a href='h'>
                    <p><i><FaInstagram /></i>ginob.jpg</p>
                  </a>
                </li>

                <li>
                  <a href='#'>
                     <p><i><FaTwitter /></i> ginoboca1</p>
                  </a>
                </li>

                <li>
                  <a href='#'>
                     <p><i><FaGithub /></i> ginoboca1</p>
                  </a>
                </li>

                <li>
                  <a href='#'>
                     <p><i><SiGmail /></i> gnoboca@gmail.com</p>
                  </a>
                </li>

                <li>
                  <a href='#'>
                     <p><i><AiFillLinkedin /></i> gnoboca@gmail.com</p>
                  </a>
                </li>
            </ul>
          </div>
        </div>
    )
}

export default Ubicacion;