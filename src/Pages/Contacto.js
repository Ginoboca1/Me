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
          Phone <a href="https://t.me/Ginoboca1">+54 (341) 665-6876</a>
        </p>
      </div>
      <button className="contact-button">
        <a href="mailto:gnoboca@gmail.com?">mail me</a>
      </button>
    </div>
  );
}
