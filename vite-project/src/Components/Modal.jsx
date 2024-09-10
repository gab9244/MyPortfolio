import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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
  const [open, setOpen] = React.useState(false);
  const [popupValue, setPopupValue] = useState({name:"",texto: ""})
  const handleOpen = (value) => {
 
    setOpen(true)
    setPopupValue(value)
  }
  const handleClose = () => setOpen(false);
      
 
  return (
    <div>
      <Button onClick={() =>handleOpen({name:"Javascript", 
        texto:"É uma linguages Full-Stack que nos permiti implementar eventos, manipular o DOM e nos dar acesso a uma vastidão de frameworks e bibliotecas."})}>
        <img src="js.png" alt=" JavaScript icon"  className="Skills" />
      </Button>
      <Button onClick={() =>handleOpen({name:"React", 
        texto:"É uma biblioteca que permite com que usemos varios hooks que nos ajudam a fazer tarefas mais complexas com eventos.Como exemplo posso destacar o useState, useContext e useEffect."})} >
        <img src="react.png" alt="React icon"  className="Skills" />
      </Button>
      <Button onClick={() =>handleOpen({name:"Node", 
        texto:"É uma plataforma que nos permite usar JavaScript no backend, eu costumo usa-lo para fazer solicitações a algum banco de dados, mas para facilitar esse processo eu prefiro usar o framework Express."})}> 
        <img src="NodeLogo.png" alt="node icon"  className="Skills" />
      </Button>
      <Button onClick={() =>handleOpen({name:"Git", 
        texto:"Git é um sistema de controle de versões, ele é utilizado para acompanhar mudança no código, podendo ser usado para fundir códigos, voltar em certas versões e etc."})}>
        <img src="GitLogo.png" alt="git icon"  className="Skills"/>
      </Button>
      <Button onClick={() =>handleOpen({name:"CSS", 
        texto:"Cascanding style sheet é um linguagem de estilo que usamos para adicionar estilo a documentos escritos em HTML e XML. Enquanto o HTML tem como proposito aplicar sintaxe a um documento o CSS tem como objetivo adicionar estilo a essa sintaxe/tags. "})}>
        <img src="css-3.png" alt="CSS icon"  className="Skills"/>
      </Button>
      <Button onClick={() =>handleOpen({name:"HTML", 
        texto:"HTML ou Hypertext Markup Language é uma linguagem que mostra texto de maneira sintatica, focando no motivo para o uso de uma tag do que o seu formato, isso quer dizer que um titulo principal deve ser definido usando a tag h1 não porque seu estilo usa um tamanho de fonte maior, mas sim porque h1 tem como uso correto ser utilizado para definir titulo principal."})}>
        <img src="html.png" alt="HTML icon"  className="Skills"/>
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

//Eu quero fazer com que quando uma das imagens forem clicadas o texto popup aparecerá mostrando uma descrição sobre a tecnologia que o icone representa
//Pra fazer com que quando um icone seja clicado uma descrição sobre ele apareça, use e.target.value e adicione o evento para que o texto do popup seja mudado baseado no valor do icone clicado
