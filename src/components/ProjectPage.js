import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../helpers/projectList";
import Title from "./Title";
import styles from "./ProjectPage.module.css";
import { FaGithub, FaGlobe, FaBehanceSquare } from "react-icons/fa";

const ProjectPage = () => {
  const { id } = useParams();
  const project = projects.filter((pjct) => pjct.id == id);
  console.log(id, project[0]);

  return (
    <section className={`${styles.container} dark`}>
      <Title text={project[0].title} />
      <div className={styles.left}>
        <p className={styles.projectDesc}>{project[0].description}</p>
        <img src={project[0].img} alt={project[0].title} />
      </div>
      <div className={styles.right}>
        <div className={styles.tecs}>
          
        </div>
        <div className={styles.links}>
          {project[0].gitHub && (
            <a
              href={project[0].gitHub}
              target="_blank"
              rel="noreferrer"
              className={` ${styles.icon}`}
            >
              <FaGithub />
            </a>
          )}
          {project[0].behance && (
            <a
              href={project[0].behance}
              target="_blank"
              rel="noreferrer"
              className={` ${styles.icon}`}
            >
              <FaBehanceSquare />
            </a>
          )}
          {project[0].site && (
            <a
              href={project[0].site}
              target="_blank"
              rel="noreferrer"
              className={`${styles.icon}`}
            >
              <FaGlobe />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
