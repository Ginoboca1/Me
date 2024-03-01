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
import { makeStyles } from "@mui/styles";

import GithubIcon from "@mui/icons-material/GitHub";

import websocketsImage from "../images/websockets.png";
import firebase from "../images/firebase.png";
import megarocket from "../images/megarocket.png";
import nestapi from "../images/nestjsapi.png";
import restaurant from "../images/restaurant.png";
import calc from "../images/CalcLog.jpg";

export default function Proyectos() {
  const navigate = useNavigate();
  const projects = [
    {
      title: "Socket.IO chat",
      image: websocketsImage,
      description: "Chat developed on React & NestJS using Socket.io",
      github: "https://github.com/Ginoboca1/ws-chat",
      deploy: "https://ws-client-6ox0.onrender.com/",
    },
    {
      title: "NestJS API",
      image: nestapi,
      description: "API Rest developed on NestJS, authenticated using jwt",
      github: "https://github.com/Ginoboca1/NestJS-Api",
      deploy:
        "https://ws-chat-docs.notion.site/Nest-js-API-4037fd68c24e474ab6553a6e3137dd78?pvs=74",
    },
    {
      title: "MEGAROCKET GYM",
      image: megarocket,
      description: "Full-Stack project develop on React, Express, MongoDB",
      github: "https://github.com/Ginoboca1/GYM-FullStack-project",
      deploy: "https://megarocketgym-app.vercel.app/auth/home",
    },
    {
      title: "React Calculator",
      image: calc,
      description:
        "Back on 2021, this is my first React project, a calculator :)",
      github: "https://github.com/Ginoboca1/CalculadoraReactJS",
      deploy: "https://ws-client-6ox0.onrender.com/",
    },
    {
      title: "Firebase Auth",
      image: firebase,
      description: "Login & sign in develop on React using Google Firebase",
      github: "https://github.com/Ginoboca1/userAuthFirebase",
      deploy: "https://ginoboca1.github.io/userAuthFirebase/",
    },
    {
      title: "React Restaurant",
      image: restaurant,
      description: "Restaurant page based on a Figma Project develop on React",
      github: "https://github.com/Ginoboca1/React-Restaurant",
      deploy: "https://ginoboca1.github.io/React-Restaurant/",
    },
  ];

  const useStyles = makeStyles({
    card: {
      transition: "box-shadow 0.3s",
      "&:hover": {
        boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)", // Cambia la sombra cuando pasas el mouse sobre la tarjeta
      },
    },
  });

  const classes = useStyles();

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
        {projects.map((project, index) => (
          <Card className={classes.card} sx={{ maxWidth: 345 }}>
            <CardMedia
              key={index}
              component="img"
              alt={project.title}
              height="140"
              image={project.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {project.title}
              </Typography>
              <Typography
                variant="body2"
                color="dark"
                style={{ textTransform: "none" }}
              >
                {project.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="red"
                onClick={() => window.open(`${project.github}`, "_blank")}
              >
                GITHUB
              </Button>
              <Button
                size="small"
                color="red"
                onClick={() => window.open(`${project.deploy}`, "_blank")}
              >
                DEPLOY
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
      <Button
        variant="contained"
        color="red"
        endIcon={<GithubIcon />}
        onClick={() =>
          window.open("https://github.com/Ginoboca1?tab=repositories", "_blank")
        }
      >
        visit my repository
      </Button>
    </div>
  );
}
