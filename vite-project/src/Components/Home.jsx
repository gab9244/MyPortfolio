// import { Grid, Typography,Box, Paper } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "./UserContext";
export const Home = () => {
  const { Language } = useContext(UserContext);

  return (
    <div className="Home  " id="home">
      <div className="HomeLayout">
        {!Language ? (
          <div>
            <h1>
              Olá, meu nome é Gabriel Francisco e eu sou um Desenvolvedor Front
              End
            </h1>
            <p>
              Gosto de resolver problemas complexos que não parecem ter
              soluções.
            </p>
          </div>
        ) : (
          <div>
            <h1>
              Hey, My name is Gabriel Francisco and I'm a Front End Desenvoloper
            </h1>
            <p>
              I like finding solutions to problems that seem to have no answer.
            </p>
          </div>
        )}

        <img
          src="Editando a minha foto (1).png"
          alt="A photo of myself"
          id="MinhaFoto"
        />
      </div>
    </div>
  );
};
