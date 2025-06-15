import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useContext } from "react";
import { UserContext } from "./UserContext";

export const Sobre = () => {
  const { Language } = useContext(UserContext);

  return (
    <main className="sobreMim">
      {!Language ? (
        <>
          <h1>Introdução</h1>
          <p>
            Meu nome é Gabriel Francisco Santos de Souza, sou um desenvolvedor e
            minha jornada até aqui começa a mais ou menos dois anos, no meu
            último ano do ensino médio. Mesmo já estando no ultimo ano eu ainda
            não tinha certeza do que eu queria fazer, então decidir fazer a
            prova do Enem e dependendo da nota eu entraria em algum curso que me
            fornecesse uma vida confortável, mas por falta de experiência e de
            estudo acabei tirando uma nota mediana, algo por volta de 648 pontos
            o que não me forneceria nenhum curso de alta qualidade, por esse
            motivo e pelo fato de eu ter começado entende sobre criação de
            sites, eu nem fui atrás de saber o que a minha nota poderia me
            proporcionar, ao invés fui atrás de saber que curso que eu poderia
            fazer para entrar no mundo do desenvolvimento e me deparei com o
            curso de Ciência de dados, então fui atrás de saber que concurso
            para esse curso existia na minha região, estudei para o concurso e
            passei, mas por causa de como a faculdade funcionava(eu só poderia
            arrumar um estagio no meu segundo ano de faculdade) eu decidir sair
            do curso e estudar por conta própria.
          </p>
          <p>
            Depois de muito esforço conseguir aprender as tecnologias básicas do
            desenvolvimento frontend(Javascript, html, css) em seguida fui
            aprender sobre React e mais algumas tecnologias, agora busco a minha
            primeira oportunidade e mesmo sendo rejeitado inúmeras vezes eu não
            vou desistir.
          </p>
          <p>
            Essa é só a superfície da minha jornada até aqui e por você ainda
            esta lendo acredito que algo lhe chamou a atenção, então por que não
            discutimos sobre isso:
          </p>
        </>
      ) : (
        <>
          <h1>More About Me.</h1>
          <p>
            My name is Gabriel Francisco Santos de Souza, I am a developer, and
            my journey started about two years ago, during my last year of high
            school. Even in my final year, I still wasn't sure what I wanted to
            do, so I decided to take the ENEM exam, and depending on the score,
            I would join a course that could provide me with a comfortable life.
            However, due to a lack of experience and study, I ended up getting
            an average score, around 648 points, which wouldn't qualify me for
            any high-quality course. Because of that and the fact that I had
            started learning about website creation, I didn't even bother to see
            what my score could get me. Instead, I looked for courses that could
            help me enter the world of development and found a Data Science
            course. I researched the entrance exam for this course in my region,
            studied for it, and got in, but because of how the college worked (I
            could only get an internship in my second year of college), I
            decided to leave the course and study on my own.
          </p>
          <p>
            After a lot of effort, I managed to learn the basics of frontend
            development (JavaScript, HTML, CSS) and then moved on to learn React
            and some other technologies. Now, I am seeking my first opportunity,
            and even though I have been rejected countless times, I will not
            give up.
          </p>
          <p>
            This is just the surface of my journey so far, and since you're
            still reading, I believe something caught your attention. So why
            don't we discuss it further?
          </p>
        </>
      )}

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
  );
};
