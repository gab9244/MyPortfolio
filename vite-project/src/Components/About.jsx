import { UserContext } from "./UserContext";
import ContainedButtons from "./Buttons";
import BasicModal from "./Modal";
import { useContext, useEffect, useRef } from "react";
export const About = () => {
  // Aqui implementamos a funcionalidade de animação ao scroll down. Para fazer esse efeito adicionamos a classe hidden ao elemento e quando esse elemento entra no view point to usuário a classe show é adicionada, assim como se ele sair a classe é removida
  const { Language } = useContext(UserContext);
  const hiddenElement = useRef(null);

  useEffect(() => {
    // Configuração do IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    // Observa o elemento atual referenciado pelo hiddenElement
    if (hiddenElement.current) {
      observer.observe(hiddenElement.current);
    }

    // Limpar a observação quando o componente é desmontado
    return () => {
      if (hiddenElement.current) {
        observer.unobserve(hiddenElement.current);
      }
    };
  }, []);
  return (
    <div
      ref={hiddenElement}
      className="aboutMe AnimatedElements hidden"
      id="About"
    >
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

      <div id="sobre" gap={10}>
        <div>
          <p>
            {Language
              ? `If you want to know more about my journey click the button belowz.`
              : `Se quiser saber um pouco mais sobre minha jornada aperte o botão abaixo.`}
          </p>
        </div>
        <div>
          <ContainedButtons link={'/Sobre'}/>
        </div>
      </div>
    </div>
  );
};
