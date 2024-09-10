import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { UserContext } from "./UserContext";
import { useContext } from "react";
export const Contact = () => {
  const { Language } = useContext(UserContext);

  return (
    <div id="Contact">
      <p>
        {Language
          ? "Thank you for visiting my portfolio, if you want to contact me flee free to use the links"
          : "Obrigado por visitar o meu portfólio, se quiser me contatar é só clicar nos links:"}
      </p>
      <div className="Socials">
        <a href="https://github.com/gab9244" target="_blank" id="githubLogo">
          <GitHubIcon className="icones" sx={{ fontSize: 60 }} />
        </a>
        <a
          href="https://www.linkedin.com/in/gabriel-francisco-s/"
          target="_blank"
        >
          <LinkedInIcon
            className="icones"
            sx={{ fontSize: 60, color: "white" }}
          />
        </a>
      </div>
    </div>
  );
};
