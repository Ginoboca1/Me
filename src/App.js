import {
  BrowserRouter,
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
      <BrowserRouter basename = {process.env.PUBLIC_URL}>
        <div className='app'>
          <div className='app-container'>
            <Header />
          </div>
        </div>

        <Routes>
            <Route path= '/' element = {<Home />}  />
            <Route path= '/proyectos' element={<Proyectos />} />
            <Route path='/contacto' element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    )
}

export default App;