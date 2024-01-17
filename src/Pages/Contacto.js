import "../styles/pages/Contacto.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function Contacto() {
  const navigate = useNavigate();
  return (
    <div className="contenedor-principal">
      <div className="icon-container">
        <AiOutlineArrowLeft
          className="arrow-icon"
          onClick={() => navigate("/")}
        />
      </div>
      <h1>Contact</h1>
      <div className="contenedor-contacto">
        <p>
          Mail <span>gnoboca@gmail.com</span>
        </p>
        <p className="contact-phone">
          Phone{" "}
          <a href="https://t.me/Ginoboca1" className="contact-phone">
            +54 (341) 665-6876
          </a>
        </p>
      </div>
      <div className="button-container">
        <button className="contact-button">
          <a href="mailto:gnoboca@gmail.com?">Mail me</a>
        </button>
        <button className="contact-button">
          <a href="https://drive.google.com/file/d/1xlRBxTTpS2kwbmsTB5iGakqgV4ao7XxK/view?usp=drive_link">
            Get CV
          </a>
        </button>
      </div>
    </div>
  );
}
