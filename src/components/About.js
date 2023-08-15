import styles from './About.module.css';
import Title from './Title';
import Button from './Button';
import Subtitle from './Subtitle';
import curriculum from '../docs/curriculo-leonardo-de-sousa-barbosa.pdf';
import { skills } from '../helpers/skillList';
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={`${styles.container} dark`}>
      <Title text="SOBRE" dark={true} />
      <div className={styles.about}>
        <div className={styles.about1}>
          <div className={styles.history}>
            <p>
              Sempre fui um admirador do design gráfico e ao conhecer melhor a
              programação, decidi juntar o melhor dos 2 mundos e me dedicar ao
              desenvolvimento front-end.
            </p>
            <p>
              Busco soluções simples e ágeis, sem desrespeitar a eficiência e a
              qualidade do processo e do resultado.
            </p>
          </div>

          <div className={`${styles.personObj} light`}>
            <p>
              const <span>person</span> = {'{'}
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
              traits: {'['}
              <span>"Dev"</span>, <span>"Designer"</span>
              {']'},
            </p>
            <p>
              education: <span>"Self-taught"</span>,
            </p>
            <p>
              location: <span>"Limeira, São Paulo"</span>
            </p>
            <p>{'}'}</p>
          </div>
          <Button text={'currículo.pdf'} margin={'0 auto'} link={curriculum} />
        </div>

        <div className={styles.about2}>
          <div className={styles.qualification}>
            <Subtitle text={'SKILLS'} margin={'0 0 .7em 0'} />
            <div className={styles.skillList}>
              {skills.map((skill, idx) => (
                <div className={styles.skill} key={idx}>
                  {skill.img} {skill.txt}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
