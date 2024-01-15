import "../styles/Portada.css";
import { SiGooglemessages } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

function Portada({ menu, projects, contact }) {
  return (
    <div className="portada-container">
      <div className="text-container">
        <div className="type-writer">
          <Typewriter
            onInit={(typewritter) => {
              typewritter.typeString("web development").start();
            }}
          />
        </div>
        <div className="portada-links">
          <Link to="/">{menu} </Link>
          <Link to="/proyectos">
            {" "}
            {/* <FaGithub /> */}
            {projects}{" "}
          </Link>
          <Link to="/contacto">
            {" "}
            {/* <SiGooglemessages /> */}
            {contact}{" "}
          </Link>
        </div>
        <div className="line"></div>
      </div>
    </div>
  );
}

export default Portada;
