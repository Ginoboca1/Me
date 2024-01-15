import React from "react";
import "../styles/pages/Proyectos.css";

export default function Proyectos() {
  return (
    <div className="contenedor-principal">
      <h1>My Projects</h1>
      <div className="projects-links">
        <a href="https://ginoboca1.github.io/Natural-Food/">Natural Food</a>
        <a href="https://ginoboca1.github.io/CalculadoraReactJS/">
          React Calculator
        </a>
        <a href="https://ginoboca1.github.io/userAuthFirebase/">
          Firebase Auth{" "}
        </a>
        <a href="https://ws-chat-client-theta.vercel.app/">Socket.io Chat</a>
        <a href="https://fallacious-whitefish-1fb.notion.site/Nest-API-Documentation-0c3eb12c7e0f4207a548b2b9fc8ed102">
          NestJS API
        </a>
        <a href="https://megarocketgym-app.vercel.app/auth/home">
          MegaRocketGYM{" "}
        </a>
        <a href="https://github.com/Ginoboca1?tab=repositories">
          {" "}
          github repository
        </a>
      </div>
    </div>
  );
}
