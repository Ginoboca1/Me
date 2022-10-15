import React from "react";
import "../styles/Testimonio.css";
import Typewriter from "typewriter-effect";

function Testimonio(props){
  return (
    <div className = 'contenedor-testimonio'>

      <img
       className='image-testimonio'
       src={require(`../images/${props.imagen}.jpg`)}
       alt='imagen-gino'
      />

       <div className='text-testimonio-container'>
         <p className='name-collaborator'>{props.name}</p>
         <p className='job-collaborator'>{props.job}</p>
         <p className='description'>
         <Typewriter
          onInit={(typewritter) => {
            typewritter.typeString('Hola! mi nombre es Gino. Soy Frontend Web Developer, diseño Web Responsives y me especializo en React. Disfruto mucho del cafe, la musica, los deportes y de los gatos. No, en serio. Amo los gatos.').start();
          }}
        />
         </p>
       </div>
       
    </div>
  )
}

export default Testimonio;
