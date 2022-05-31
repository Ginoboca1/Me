import {
  HashRouter,
  Route,
  Routes,
} from "react-router-dom";

import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './Pages/Home';
import Proyectos from './Pages/Proyectos';
import Contacto from './Pages/Contacto';


function App(){
    return (
      <HashRouter>
        <div className='app'>
          <div className='app-container'>
            <Header />
          </div>
        </div>

        <Routes>
            <Route exact path= '/' element = {<Home />}  />
            <Route exact path= '/proyectos' element={<Proyectos />} />
            <Route exact path='/contacto' element={<Contacto />} />
        </Routes>
      </HashRouter>
    )
}

export default App;