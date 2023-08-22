import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Proyectos from "./Pages/Proyectos";
import Contacto from "./Pages/Contacto";
import { Footer } from "./components/Footer";

function App() {
  return (
    <HashRouter>
      <div className="app">
        <div className="app-container">
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
