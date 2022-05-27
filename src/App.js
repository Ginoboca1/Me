import React from 'react';
import './App.css';
import Testimonio from './components/testimonio';
import Header from './components/Header';
import Portada from './components/Portada';
import Ubicacion from './components/Ubicacion';



 
function App(){
    return (
       <div className='app'>
          <div className='app-container'>
            <Header />
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
        </div>
    )
}

export default App;