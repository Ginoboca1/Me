import "../styles/Testimonio.css";


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
         <p className='description'>{props.description}</p>
       </div>
       
    </div>
  )
}

export default Testimonio;
