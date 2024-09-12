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
              <p className="paragraph">
                My goal with this project is to provide a organization where the
                user can create their blocks of tasks, mark them as complete and
                delete them. <br />
                With this project, I learned how to use routes in a more
                efficient and also MongoDB collections. <br />
                <span className="negrito">technologies</span>: React, JSX,
                TypeScript, Node, Express, MongoDB, Mongoose
              </p>
            ) : (
              <p className="paragraph">
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
          <img
            src="screenshot-challenger01.png"
            alt="A Memory game screenshot"
          />

          <div className={"uperPart"}>
            <button className="visitWebBtn">
              <a
                href="https://manage-landing-page-master-challenge-2w5a3hunc.vercel.app/"
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
              {Language
                ? `This is a challenge that I did from Frontend Mentor, being a simple e-commerce, not having much JavaScript, since the focus is on how to use CSS to position formats in a responsive way.
                        The only challenge of this project was making the carousel, in my case the difficulty appeared due to the fact that I myself made the carousel's operation into something complex, and just using transitionX already created the expected result.`
                : ` Este é um desafio que eu fiz do Frontend Mentor, sendo um e commerce simples, não possuindo muito JavaScript, já que o foco é como usar o CSS para posicionar formatos de maneira responsiva.
              O unico desafio desse projeto foi fazer o carrossel, no meu caso a dificuldade apareceu pelo fato de eu mesmo tornar o funcionamento do carrossel em algo complexo, sendo que apenas usando transitionX já criou o resultado esperado.`}
            </Typography>
          </div>
        </section>
      </div>
      <div id="sobre" gap={10}>
        <div>
          <p>
            {Language
              ? `
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
