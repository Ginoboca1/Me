import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Header.css";
import Navbar from "./Navbar.js";
import { AiOutlineMenu } from "react-icons/ai";
import { FaYoutube, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsList } from "react-icons/bs";

function Header() {
  const [clicked, setClicked] = useState(false);

  return (
    <header className="header-contenedor">
      <div className="menu-btn" id="btn-menu">
        <AiOutlineMenu />
      </div>
      <div className={`redes${clicked ? "-active" : ""}`}>
        <div className="red">
          <a href="https://github.com/Ginoboca1">
            <FaGithub />
          </a>
        </div>

        <div className="red">
          <a href="https://www.instagram.com/ginob.jpg/">
            <FaInstagram />
          </a>
        </div>

        <div className="red x">
          <a href='https://twitter.com/GinoBoca1"'>
            <FaXTwitter />
          </a>
        </div>

        <div className="red">
          <a href="https://www.linkedin.com/in/gino-bocacorsicopicolino-7b983121b/">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <Link to="/" className="logo">
        gnoboc
      </Link>

      <div className={`navbar-container-${clicked ? "active" : ""}`}>
        <Navbar
          menu="Home"
          projects="Projects"
          contact="Contact"
          clicked={clicked}
          setClicked={setClicked}
        />
      </div>

      <button className="nav-icon" onClick={() => setClicked(!clicked)}>
        <BsList />
      </button>
    </header>
  );
}

export default Header;
