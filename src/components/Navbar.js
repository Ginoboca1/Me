import React from 'react';
import '../styles/Navbar.css';

function Navbar(props){

    return(
        <nav className='navbar'>
            <a href='#'>{props.menu}</a>
            <a href='https://github.com/Ginoboca1?tab=repositories'>{props.proyectos}</a>
            <a href='#'>{props.contacto}</a>
        </nav>
    )
}

export default Navbar;