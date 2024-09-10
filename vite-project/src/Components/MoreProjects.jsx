import React from "react";
import { Typography } from "@mui/material";
export const MoreProjects = () => {
  return (
    <div id="Projects">
      <Typography variant="h4" component={"h3"} sx={{ marginBottom: 12 }}>
        Meus projetos
      </Typography>
      <div className="sessões">
        <section>
          <img src="myblog-print-2.png" alt="My blog screenshot" />
          <div className={"uperPart"}>
            <button className="visitWebBtn">
              <a href="https://theblog-api.onrender.com/" target="_blank">
                Website
              </a>
            </button>
          </div>
          <div className={"lowerPart"}>
            <Typography variant="h7" component={"p"}>
              O site oferece uma simples experiência de criação de blogs, nele
              você pode criar a sua conta, entrar nela e criar a sua própria
              página, assim como editar-lá e tambémdeleta-lá. Meus objetivo com
              esse projeto foi criar o meu primeiro site mern(mongoose, express,
              React, Node) e sem sombra de duvidas foi o mais dificil. <br />
              <span className="negrito">technologies</span>: React JS,
              TypeScript, Node, Express, JavaScript, HTML e CSS,mongoDB
            </Typography>
          </div>
        </section>
        <section>
          <img src="taskmanager-printe.png" alt="A MultiStepForm screenshot" />
          <div className={"uperPart"}>
            <button className="visitWebBtn">
              <a href="https://task-manager-q6ci.onrender.com/" target="_blank">
                Website
              </a>
            </button>
          </div>
          <div className="lowerPart">
            <Typography
              variant="h7"
              component={"p"}
              className="paragraph"
              marginLeft={10}
            >
              Meu objetivo com este projeto é proporcionar uma experiência de
              organização onde o usuário pode criar seus blocos de
              tarefas,marcá-los como completos e deletá-los. <br />
              Com este projeto, eu aprendi como usar routes de uma maneiramais
              eficiente e tambémcoleções do MongoDB. <br />
              <span className="negrito">technologies</span>: React, JSX,
              TypeScript, Node, Express, MongoDB, Mongoose
            </Typography>
          </div>
        </section>
        <section>
          <img src="screenshot-cv-projeto.png" alt="A Memory game screenshot" />

          <div className={"uperPart"}>
            <button className="visitWebBtn">
              <a
                href="https://cv-application-sandy-ten.vercel.app/"
                target="_blank"
              >
                Website
              </a>
            </button>
          </div>
          <div className="lowerPart">
            <Typography
              variant="h7"
              component={"p"}
              className="paragraph"
              marginLeft={10}
            >
              Este é um criador de currículo, nele o usuário pode colocar
              quantas sessões ele quiser sobre qualquer campo como suas
              experiências, onde estudou e o que e também as linguas que sabe
              falar.
            </Typography>
          </div>
        </section>
      </div>
    </div>
  );
};
