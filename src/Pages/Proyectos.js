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
        <a href="https://fallacious-whitefish-1fb.notion.site/WS-Chat-1-c1205ecdb38c417fa5f5086f834d15a0">
          Socket.io Chat
        </a>
        <a href="https://ws-chat-docs.notion.site/Nest-js-API-4037fd68c24e474ab6553a6e3137dd78?pvs=74">
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
