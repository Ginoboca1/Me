import React from "react";
import "../styles/pages/Proyectos.css";

export default function Proyectos() {
  return (
    <div className="contenedor-principal">
      <h1>My Projects</h1>
      <div className="projects-links">
        <a href="https://ginoboca1.github.io/Natural-Food/">Natural Food</a>
        <a href="https://ginoboca1.github.io/TaskApp/">TaskApp</a>
        <a href="https://ginoboca1.github.io/CalculadoraReactJS/">
          React Calculator
        </a>
        <a href="https://github.com/Ginoboca1/NestJS-Api">NestJS API</a>
        <a href="https://ginoboca1.github.io/userAuthFirebase/">
          Firebase Auth{" "}
        </a>
        <a href="https://megarocketgym-app.vercel.app/auth/home">
          MegaRocketGYM{" "}
        </a>
        <a href="https://github.com/Ginoboca1?tab=repositories">
          {" "}
          repositorio github
        </a>
      </div>
    </div>
  );
}
