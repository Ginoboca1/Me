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

       <div className='text-container'>
         <p className='name-collaborator'>{props.name}</p>
         <p className='job-collaborator'>{props.job}</p>
         <p className='description'>{props.description}</p>
       </div>
       
    </div>
  )
}

export default Testimonio;
