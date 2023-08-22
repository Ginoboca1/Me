import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Header.css";
import Navbar from "./Navbar.js";
import { FaYoutube, FaInstagram, FaXTwitter } from "react-icons/fa";
import { AiOutlineMenu, AiFillLinkedin } from "react-icons/ai";
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>
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
