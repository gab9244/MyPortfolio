import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
export const Sobre = () => {
  return (
    
    <main className="sobreMim">
      <h1>Mais sobre mim.</h1>
      <p>Meu nome é Gabriel Francisco Santos de Souza, sou um desenvolvedor e minha jornada até aqui começa a mais ou menos dois anos, no meu último ano do ensino médio. Mesmo já estando no ultimo ano eu ainda não tinha certeza do que eu queria fazer, então decitir fazer a prova do enem e dependendo da nota eu entraria em algum curso que me fornecesse uma vida confortavel, mas por falta de experiência e de estudo acabei tirando uma nota mediana, algo por volta de 648 pontos o que não me forneceria nenhum curso de alta qualidade, por esse motivo e pelo fato de eu ter começado entende sobre criação de sites, eu nem fui atrás de saber o que a minha nota poderia me proporcionar, ao inves fui atrás de saber que curso que eu poderia fazer para entrar no mundo do desenvolvimento e me deparei com o curso de Ciência de dados, então fui atrás de saber que concurso para esse curso existia na minha região, estudei para o concurso e passei, mas por causa de como a faculdade funcionava(eu só poderia arrumar um estagio no meu segundo ano de faculdade) eu decidir sair do curso e estudar por conta propria.</p>
      <p>Depois de muito esforço conseguir aprender as tecnologias basicas do desenvolvimento frontend(Javascript,html,css) em seguida fui aprender sobre React e mais algumas tecnologias, agora busco a minha primeira oportunidade e mesmo sendo rejeitado inumeras vezes eu não vou desistir.</p>
      <p>Essa é só a superficie da minha jornada até aqui e por você ainda esta lendo acredido que algo lhe chamou a atenção, então por que não discutimos sobre isso:</p>
      <div className="SobreSocials">
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
    </main>
  )
}
