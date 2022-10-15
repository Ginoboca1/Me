import React from "react";
import "../styles/Portada.css";
import { SiGooglemessages } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

function Portada({ menu, proyectos, contacto }) {
  return (
    <div className="portada-container">
      <div className="text-container">
      <div className="type-writer">
      <Typewriter
          onInit={(typewritter) => {
            typewritter.typeString("desarrollo web").start();
          }}
        />
      </div>
        <div className="portada-links">
          <Link to="/">{menu} </Link>
          <a href="https://github.com/Ginoboca1?tab=repositories">
            {" "}
            <FaGithub />
            {proyectos}
          </a>
          <Link to="/contacto">
            {" "}
            <SiGooglemessages />
            {contacto}{" "}
          </Link>
        </div>
        <div className="line"></div>
      </div>
    </div>
  );
}

export default Portada;
