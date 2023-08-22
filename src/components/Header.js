import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Header.css";
import Navbar from "./Navbar.js";
import { FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";
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
              width="28"
              height="32"
              viewBox="0 0 300 300"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66" />
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
