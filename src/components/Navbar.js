import React from 'react';
import '../styles/Navbar.css';
import { NavLink } from 'react-router-dom';


 
function Navbar({ menu, proyectos, contacto }){

    return(
            <nav className='navbar'>
              <NavLink className={({ isActive }) => (isActive ? "active" : "")} to= '/'>{menu}</NavLink>
              <NavLink className={({ isActive }) => (isActive ? "active" : "")} to= '/proyectos'>{proyectos}</NavLink>
              <NavLink className={({ isActive }) => (isActive ? "active" : "")} to= '/contacto'>{contacto}</NavLink>
            </nav>
    )
}

export default Navbar;