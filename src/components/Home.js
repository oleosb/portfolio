import Button from "./Button";
import Title from "./Title";
import Subtitle from "./Subtitle";
import Project from "./Project";
import { projects } from "../helpers/projectList";
import styles from "./Home.module.css";
import { FaGithub, FaLinkedinIn, FaBehanceSquare } from "react-icons/fa";
import leoProfileImg from "../imgs/leo-profile.png";
import curriculum from "../docs/curriculo-leonardo-de-sousa-barbosa.pdf";
import { NavLink } from "react-router-dom";
import { skills } from "../helpers/skillList";

const App = () => {
  return (
    <>
      <main className={`${styles.container} dark ${styles.mainHome}`}>
        <div className={styles.mainHome1}>
          <h3>OLÁ,</h3>
          <h1>EU SOU O LEO.</h1>
          <h4>FRONT-END DEV</h4>
          <h3>SEJA BEM-VINDO AO MEU PORTFÓLIO.</h3>
        </div>
        <div className={styles.mainHome2}>
          <div className={styles.photoContainer}>
            <img src={leoProfileImg} alt="Leo" />
          </div>
          <div className={styles.homeContacts}>
            <a
              className={styles.icon}
              href="https://github.com/oleosb/"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              className={styles.icon}
              href="https://www.behance.net/4a493605"
              target="_blank"
              rel="noreferrer"
            >
              <FaBehanceSquare />
            </a>
            <a
              className={styles.icon}
              href="https://www.linkedin.com/in/oleosb/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </main>

      <section className={`${styles.container} light`}>
        <Title text="SOBRE" dark={true} />
        <div className={styles.about}>
          <div className={styles.about1}>
            <div className={`${styles.personObj} dark`}>
              <p>
                const <span>person</span> = {"{"}
              </p>
              <p>
                firstName: <span>"Leonardo"</span>,
              </p>
              <p>
                lastName: <span>"Barbosa"</span>,
              </p>
              <p>
                age: <span>new Date().getFullYear() - 1998</span>,
              </p>
              <p>
                traits: {"["}
                <span>"Dev"</span>, <span>"Designer"</span>
                {"]"},
              </p>
              <p>
                education: <span>"Self-taught"</span>,
              </p>
              <p>
                location: <span>"Limeira, São Paulo"</span>
              </p>
              <p>{"}"}</p>
            </div>
            <Button
              text={"currículo.pdf"}
              margin={"0 auto"}
              link={curriculum}
            />
          </div>

          <div className={styles.about2}>
            <div className={styles.history}>
              <p>
                Sempre fui um admirador do design gráfico e ao conhecer melhor a
                programação, decidi juntar o melhor dos 2 mundos e me dedicar ao
                desenvolvimento front-end.
              </p>
              <p>
                Busco soluções simples e ágeis, sem desrespeitar a eficiência e
                a qualidade do processo e do resultado.
              </p>
            </div>
            <div className={styles.qualification}>
              <Subtitle text={"SKILLS"} margin={"0 0 .7em 0"} />
              <div className={styles.skillList}>
                {skills.slice(0, 6).map((skill, idx) => (
                  <div className={styles.skill} key={idx}>
                    {skill.img}
                  </div>
                ))}
              </div>
              <Button
                text={"mais"}
                link={"/sobre"}
                margin={"2em auto 0 auto"}
                nav={<NavLink to="/sobre">mais</NavLink>}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className={`${styles.container} ${styles.projectsContainer} dark`}
      >
        <Title text="PROJETOS" />
        <div className={styles.categories}>
          <div>
            <div style={{ backgroundColor: "#F8D210" }}></div> código
          </div>
          <div>
            <div style={{ backgroundColor: "#C55FFC" }}></div>design
          </div>
        </div>
        <div className={styles.projects}>
          {projects.slice(0, 6).map((project, idx) => (
            <Project key={idx} {...project} />
          ))}
        </div>
        <Button
          text={"mais"}
          link={"/projetos"}
          margin={"2em auto 0 auto"}
          nav={<NavLink to="/projetos">mais</NavLink>}
        />
      </section>
    </>
  );
};

export default App;
