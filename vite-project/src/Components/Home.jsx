// import { Grid, Typography,Box, Paper } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "./UserContext";
export const Home = () => {
  const { Language } = useContext(UserContext);

  return (
    <div className="Home" id="home">
      <div className="HomeLayout">
        {!Language ? (
          <h1>
            Olá, meu nome é Gabriel Francisco e eu sou um Desenvolvedor Front
            End
          </h1>
        ) : (
          <h1>
            Hey, My name is Gabriel Francisco and I'm a Front End Desenvoloper
          </h1>
        )}

        <img src="Editando a minha foto (1).png" alt="A photo of myself" id="MinhaFoto" />
      </div>
    </div>
  );
};
