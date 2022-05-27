import Portada from "../components/Portada";
import Testimonio from "../components/testimonio";
import Ubicacion from "../components/Ubicacion";

function Home() {
    return (
        <div>
            <Portada menu = 'Home' proyectos = 'Proyectos' contacto = "Contacto" />
            <h1 className='title'>¿Quien soy?</h1>
            <Testimonio 
             name = 'Gino Boca'
             imagen = 'gino'
             job = 'Frontend Web Developer'
             description = 'Hey! Hola, mi nombre es Gino. Soy Frontend Web Developer, diseño Web Responsives y me especializo en React. Disfruto mucho del cafe en todas sus versiones, la musica, el ejercicio y de los gatos. En serio, amo los gatos.'
            />
             <Ubicacion/>
        </div>
    );
}

export default Home;