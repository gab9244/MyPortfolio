import { UserContext } from "./UserContext";

import BasicModal from "./Modal";
import { useContext } from "react";
export const About = () => {
  const { Language } = useContext(UserContext);

  return (
    <div className="aboutMe" id="About">
      <div className="Greeting">
        <p>
          {Language
            ? `I became interested in development in mid-2022, and Since then, I
                  have dedicated myself to studying and improving my skills. skills to
                  become a successful developer. My journey started with HTML and over
                  time evolved to CSS, JavaScript, React and TypeScript. Furthermore,
                  I am aware basic in Node, Express, MongoDB and MUI`
            : ` Comecei a me interessar por desenvolvimento em meados de 2022, e
              desde então, tenho me dedicado a estudar e aprimorar minhas
              habilidades para me tornar em um desenvolvedor de sucesso. Minha
              jornada começou com HTML e, ao longo do tempo, evoluiu para CSS,
              JavaScript, React e TypeScript. Além disso, tenho conhecimento
              básico em Node, Express, MongoDB e MUI.`}
        </p>
        <BasicModal />
      </div>
    </div>
  );
};
