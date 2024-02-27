import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "../styles/pages/Proyectos.css";
import { useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Proyectos() {
  const navigate = useNavigate();
  const projects = [
    {
      title: "Socket.IO chat",
      image: "../images/websockets.png",
      description: "Chat developed on React & NestJS using Socket.io",
      github: "https://github.com/Ginoboca1/ws-chat",
      deploy: "https://ws-client-6ox0.onrender.com/",
    },
    {
      title: "NestJS API",
      image: "../images/websockets.png",
      description:
        "API Rest developed on NestJS, authenticated using jwt and MongoDB",
      github: "https://github.com/Ginoboca1/NestJS-Api",
      deploy:
        "https://ws-chat-docs.notion.site/Nest-js-API-4037fd68c24e474ab6553a6e3137dd78?pvs=74",
    },
    {
      title: "MEGAROCKET GYM",
      image: "../images/websockets.png",
      description: "Full-Stack project develop on React, Express, MongoDB",
      github: "https://github.com/Ginoboca1/GYM-FullStack-project",
      deploy: "https://megarocketgym-app.vercel.app/auth/home",
    },
    {
      title: "React Calculator",
      image: "../images/websockets.png",
      description:
        "Back on 2021, this is my first React project, a calculator :)",
      github: "https://github.com/Ginoboca1/CalculadoraReactJS",
      deploy: "https://ws-client-6ox0.onrender.com/",
    },
    {
      title: "Firebase Auth",
      image: "../images/websockets.png",
      description: "Login & sign in develop on React using Google Firebase",
      github: "https://github.com/Ginoboca1/userAuthFirebase",
      deploy: "https://ginoboca1.github.io/userAuthFirebase/",
    },
    {
      title: "React Restaurant",
      image: "../images/websockets.png",
      description: "Restaurant page based on a Figma Project develop on React",
      github: "https://github.com/Ginoboca1/React-Restaurant",
      deploy: "https://ws-client-6ox0.onrender.com/",
    },
  ];
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
        {projects.map((project) => (
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={project.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {project.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ textTransform: "none" }}
              >
                {project.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="error"
                onClick={() => window.open(`${project.github}`, "_blank")}
              >
                GITHUB
              </Button>
              <Button
                size="small"
                color="error"
                onClick={() => window.open(`${project.deploy}`, "_blank")}
              >
                DEPLOY
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}
