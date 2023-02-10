import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Header.css";
import Navbar from "./Navbar.js";
import { FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";
import { AiOutlineMenu, AiFillLinkedin  } from "react-icons/ai";
import { BsList } from "react-icons/bs";

function Header() {

  const [clicked, setClicked] = useState(false);

  return (
    <header className="header-contenedor">
      <div className="menu-btn" id="btn-menu">
        <AiOutlineMenu />
      </div>
      <div className = {`redes${clicked ? '-active' : ''}`} >
        <div className="red">
          <a href="https://www.instagram.com/ginob.jpg/">
            <FaYoutube />
          </a>
        </div>

        <div className="red">
          <a href="https://www.instagram.com/ginob.jpg/">
            <FaInstagram />
          </a>
        </div>

        <div className="red">
          <a href='https://twitter.com/GinoBoca1"'>
            <FaTwitter />
          </a>
        </div>

        <div className="red">
          <a href="https://www.linkedin.com/in/gino-bocacorsicopicolino-7b983121b/">
            <AiFillLinkedin />
          </a>
        </div>
      </div>

      <div className="contenedor-logo">
        <Link to="/" className="logo">
          gnoboc
        </Link>
      </div>

      <div className = {`navbar-container-${clicked ? 'active' : ''}`}>
        <Navbar menu="Home" proyectos="Proyectos" contacto="Contacto" clicked = {clicked} setClicked = {setClicked} />
      </div>

      <button className="nav-icon" onClick={() => setClicked(!clicked)}>
        <BsList />
      </button>
    </header>
  );
}

export default Header;
