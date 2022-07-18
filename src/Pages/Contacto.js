import '../styles/pages/Pages.css';

export default function Contacto() {
    return (
      <div className="contenedor-principal">
        <h1>contacto</h1>

        <div className='contenedor-contacto'>
          <p>Mail <span>gnoboca@gmail.com</span></p>
          <p>Telefono <span>+54 341-665-6876</span></p>
          <div className='mailme'>
             <a href='https://wa.me/3416656876'>
              <h4>Enviame un mensaje</h4>
             </a>
          </div>
        </div>
      </div>
    )
  }