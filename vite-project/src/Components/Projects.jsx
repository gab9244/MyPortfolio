import { useState, useContext } from "react";
import { UserContext } from "./UserContext";

import ContainedButtons from "./Buttons";
import { Grid, Typography, Box } from "@mui/material";
export const Projects = () => {
  const { Language } = useContext(UserContext);

  return (
    <div id="Projects">
      <h2 className="ProjectsH2">
        {Language ? "My Projects" : "Meus projetos"}
      </h2>
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
            {Language ? (
              <p>
                The site offers a simple blogging experience, in which you can
                create your account, log in and create your own page, as well as
                edit it and delete it. My goals with this project was to create
                my first mern website(mongoose, express, React, Node) and
                without a doubt it was the most difficult. <br />
                <span className="negrito">technologies</span>: React JS,
                TypeScript, Node, Express, JavaScript, HTML e CSS,mongoDB
              </p>
            ) : (
              <p>
                O site oferece uma simples experiência de criação de blogs, nele
                você pode criar a sua conta, entrar nela e criar a sua própria
                página, assim como editar-lá e tambémdeleta-lá. Meus objetivo
                com esse projeto foi criar o meu primeiro site mern(mongoose,
                express, React, Node) e sem sombra de duvidas foi o mais
                dificil. <br />
                <span className="negrito">tecnologias</span>: React JS,
                TypeScript, Node, Express, JavaScript, HTML e CSS,mongoDB
              </p>
            )}
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
            {Language ? (
              <p
                className="paragraph"
                
              >
                My goal with this project is to provide a organization where the
                user can create their blocks of tasks, mark them as complete and
                delete them. <br />
                With this project, I learned how to use routes in a more
                efficient and also MongoDB collections. <br />
                <span className="negrito">technologies</span>: React, JSX,
                TypeScript, Node, Express, MongoDB, Mongoose
              </p>
            ) : (
              <p
                className="paragraph"
              >
                Meu objetivo com este projeto é proporcionar uma experiência de
                organização onde o usuário pode criar seus blocos de
                tarefas,marcá-los como completos e deletá-los. <br />
                Com este projeto, eu aprendi como usar routes de uma maneiramais
                eficiente e tambémcoleções do MongoDB. <br />
                <span className="negrito">tecnologias</span>: React, JSX,
                TypeScript, Node, Express, MongoDB, Mongoose
              </p>
            )}
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
            {Language ? (
              <p
                className="paragraph"
              >
                This is a resume creator, in it the user can put as many
                sessions as he wants on any field as his experiences, where you
                studied and what and also the languages  ​​you know to speak
              </p>
            ) : (
              <p
                className="paragraph"
              >
                Este é um criador de currículo, nele o usuário pode colocar
                quantas sessões ele quiser sobre qualquer campo como suas
                experiências, onde estudou e o que e também as linguas que sabe
                falar.
              </p>
            )}
          </div>
        </section>
      </div>
      <div id="sobre" gap={10}>
        <div>
          <p>
            {Language
              ?`
              If you want to see more projects and technologies that I usually use, just
              click the button
              .`
              : `Se quiser ver mais projetos e tecnologias que eu costumo usar é só
            clicar no botão.`}
          </p>
        </div>
        <div>
          <ContainedButtons />
        </div>
      </div>
    </div>
  );
};
