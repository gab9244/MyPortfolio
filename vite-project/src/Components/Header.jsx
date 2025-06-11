import { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";
export const Header = () => {
  const [MenuOn, setMenuOn] = useState(false);
  const { Language, setLanguage } = useContext(UserContext);

  const ChooseL = () => {
    setLanguage(!Language);
  };
  const ShowMenu = () => {
    setMenuOn(!MenuOn);
  };

  return (
    <>
      <header className="Header">
        <Link to="/">
          <img src="MeuLogo.png" alt="Meu logo" id="Logo"  />
        </Link>
        {/* É necessário ter o mesmo texto duas vezes para poder criar o efeito */}
        <div className="slider">
          {Language ? (
            <>
              <div className="texto">
                <p>Avaliable anytime </p>
              </div>
              <div className="texto">
                <p>Avaliable anytime</p>
              </div>
            </>
          ) : (
            <>
              <div className="texto">
                <p>Disponivel a qualquer momento</p>
              </div>
              <div className="texto">
                <p>Disponivel a qualquer momento</p>
              </div>
            </>
          )}
        </div>
        <div className="MenuBtns">
          {Language ? (
            <img
              src="https://victortrani.dev/img/united-states-of-america.22de86d3.svg"
              alt="USA flag"
              width={"40px"}
              onClick={ChooseL}
              className="lenguageBtn"
            />
          ) : (
            <img
              src="https://victortrani.dev/img/brazil.122c671e.svg"
              alt="Brazil flag"
              width={"40px"}
              onClick={ChooseL}
              className="lenguageBtn"
            />
          )}

          <button id="MenuButton" onClick={ShowMenu}>
            {!Language
              ? !MenuOn
                ? "Menu"
                : "Fechar"
              : !MenuOn
              ? "Menu"
              : "Close"}
          </button>
          {MenuOn && (
            <div className="Menu">
              {Language ? (
                <ul>
                  <li>
                    <Link to ={"/Sobre"}>About</Link>
                  </li>
                  <li>
                    <Link to={"/MoreProjects"}>Projects</Link>
                  </li>
                  <li><a href="https://www.linkedin.com/in/gabriel-francisco-s/" target="_blank">Linkedin</a></li>
                  <li><a href="https://github.com/gab9244" target="_blank">Github</a></li>
                </ul>
              ) : (
                <ul>
                  <li><Link to ={"/Sobre"}>Sobre</Link></li>
                  <li>
                    <Link to={"/MoreProjects"}>Projetos</Link>
                  </li>
                  <li><a href="https://www.linkedin.com/in/gabriel-francisco-s/" target="_blank">Linkedin</a></li>
                  <li><a href="https://github.com/gab9244" target="_blank">Github</a></li>
                </ul>
              )}
            </div>
          )}
        </div>
      </header>
    </>
  );
};

