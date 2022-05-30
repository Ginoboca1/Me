import React from 'react';
import '../styles/Navbar.css';
import { NavLink } from 'react-router-dom';


 
function Navbar(props){

    return(
            <nav className='navbar'>
              <NavLink
               className={({ isActive }) => (isActive ? "active" : "")}
               to= '/'>{props.menu}
               </NavLink>
              <NavLink className={({ isActive }) => (isActive ? "active" : "")} to= '/proyectos'>{props.proyectos}</NavLink>
              <NavLink className={({ isActive }) => (isActive ? "active" : "")} to= '/contacto'>{props.contacto}</NavLink>
            </nav>
    )
}

export default Navbar;