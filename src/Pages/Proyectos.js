import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "../styles/pages/Proyectos.css";
import { useNavigate } from "react-router-dom";

export default function Proyectos() {
  const navigate = useNavigate();
  return (
    <div className="contenedor-principal">
      <div className="icon-container">
        <AiOutlineArrowLeft
          className="arrow-icon"
          onClick={() => navigate("/")}
        />
      </div>
      <h1>My Projects</h1>
      <div className="projects-links">
        <a href="https://ginoboca1.github.io/React-Restaurant/">
          React restaurant
        </a>
        <a href="https://github.com/Ginoboca1/CalculadoraReactJS">
          React Calculator
        </a>
        <a href="https://ginoboca1.github.io/userAuthFirebase/">
          Firebase Auth{" "}
        </a>
        <a href="https://github.com/Ginoboca1/ws-chat">Socket.io Chat</a>
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
