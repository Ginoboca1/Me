import "../styles/pages/Contacto.css";

export default function Contacto() {
  return (
    <div className="main-container">
      <h1>Contact</h1>
      <div className="contenedor-contacto">
        <p>
          Mail <span>gnoboca@gmail.com</span>
        </p>
        <p>
          Phone <span>+54 (341) 665-6876</span>
        </p>
      </div>
      <button className="contact-button">
        <a href="mailto:gnoboca@gmail.com?">
          mail me
        </a>
      </button>
    </div>
  );
}
