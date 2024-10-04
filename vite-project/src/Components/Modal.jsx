import * as React from "react";
import { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { UserContext } from "./UserContext";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  color: "black",
};

export default function BasicModal() {
  const { Language } = useContext(UserContext);

  const [open, setOpen] = React.useState(false);
  const [popupValue, setPopupValue] = useState({ name: "", texto: "" });
  const handleOpen = (value) => {
    setOpen(true);
    setPopupValue(value);
  };
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={() =>
          handleOpen(
            !Language
              ? {
                  name: "Javascript",
                  texto:
                    "É uma linguagem Full-Stack que nos permite implementar eventos, manipular o DOM e nos dar acesso a uma vastidão de frameworks e bibliotecas.",
                }
              : {
                  name: "Javascript",
                  texto:
                    "Is a full-stack language that allows us to implement events, manipulate the DOM, and give us access to a large number of frameworks and libraries.",
                }
          )
        }
      >
        <img src="js.png" alt=" JavaScript icon" className="Skills" />
      </Button>
      <Button
        onClick={() =>
          handleOpen(
            !Language
              ? {
                  name: "React",
                  texto:
                    "É uma biblioteca que permite com que usemos varios hooks que nos ajudam a fazer tarefas mais complexas com eventos.Como exemplo posso destacar o useState, useContext e useEffect.",
                }
              : {
                  name: "React",
                  texto:
                    "It's a library that allow the use of a variety of hooks that help us to do more complex tasks with events. As exempla I can list useState, useContext and useEffect",
                }
          )
        }
      >
        <img src="react.png" alt="React icon" className="Skills" />
      </Button>
      <Button
        onClick={() =>
          handleOpen(
            !Language
              ? {
                  name: "Node",
                  texto:
                    "É uma plataforma que nos permite usar JavaScript no backend, eu costumo usa-lo para fazer solicitações a algum banco de dados, mas para facilitar esse processo eu prefiro usar o framework Express.",
                }
              : {
                  name: "Node",
                  texto:
                    "It's a platform that allow us to use JavaScript in the Backend. I usually use it to make requests to some database, but to make this process easy I prefer to use a framework called Express.",
                }
          )
        }
      >
        <img src="NodeLogo.png" alt="node icon" className="Skills" />
      </Button>
      <Button
        onClick={() =>
          handleOpen(
            !Language
              ? {
                  name: "Git",
                  texto:
                    "Git é um sistema de controle de versões, ele é utilizado para acompanhar mudança no código, podendo ser usado para fundir códigos, voltar em certas versões e etc.",
                }
              : {
                  name: "Git",
                  texto:
                    "Git is a version control system, he is used to track changes in the code, it can even be used to merge code and go back to certain versions, etc.",
                }
          )
        }
      >
        <img src="GitLogo.png" alt="Git icon" className="Skills" />
      </Button>
      <Button
        onClick={() =>
          handleOpen(
            !Language
              ? {
                  name: "CSS",
                  texto:
                    "Cascanding Style Sheet é um linguagem de estilo que usamos para adicionar estilo a documentos escritos em HTML e XML. Enquanto o HTML tem como proposito aplicar sintaxe a um documento o CSS tem como objetivo adicionar estilo a essa sintaxe/tags. ",
                }
              : {
                  name: "CSS",
                  texto:
                    "CSS or Cascading Style Sheet is a makeup language that we use to add style to HTML and XML documents. While HTML have as goal apply syntax to a document CSS wants to add style to that syntax/tags. ",
                }
          )
        }
      >
        <img src="css-3.png" alt="CSS icon" className="Skills" />
      </Button>
      <Button
        onClick={() =>
          handleOpen(
            !Language
              ? {
                  name: "HTML",
                  texto:
                    "HTML ou Hypertext Markup Language é uma linguagem que mostra texto de maneira sintatica, focando no motivo para o uso de uma tag do que o seu formato, isso quer dizer que um titulo principal deve ser definido usando a tag h1 não porque seu estilo usa um tamanho de fonte maior, mas sim porque h1 tem como uso correto ser utilizado para definir titulo principal.",
                }
              : {
                  name: "HTML",
                  texto:
                    "HTML or Hypertext Markup Language  is a language that show text in a syntactic way, focusing in the motivation to the use of a tag instead of its format, this mean that a main title must to be defined using a h1 tag, not because of the bigger style font size that it uses, but because h1 has as it correct use be used to define main titles.",
                }
          )
        }
      >
        <img src="html.png" alt="HTML icon" className="Skills" />
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {popupValue.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {popupValue.texto}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
<div className="Skills">
  <img src="js.png" alt=" JavaScript icon" />
  <img src="react.png" alt="React icon" />
</div>;
