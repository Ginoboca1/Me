import React from 'react';
import '../styles/Navbar.css';
import { NavLink } from 'react-router-dom';


 
function Navbar({ menu, projects, contact, clicked, setClicked }){

    return(
        <nav className='nav'>
              <div className='nav-menu'>
                <NavLink className={({ isActive }) => (isActive ? "active" : "nav-item")} to= '/' onClick={() => setClicked(false)}>{menu}</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active" : "nav-item")} to= '/proyectos' onClick={() => setClicked(false)}>{projects}</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active" : "nav-item")} to= '/contacto' onClick={() => setClicked(false)}>{contact}</NavLink>
             </div>
        </nav>
    )
}

export default Navbar;