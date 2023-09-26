import styles from "./Project.module.css";
import { FaGithub, FaGlobe, FaBehanceSquare, FaEye } from "react-icons/fa";
import Subtitle from "./Subtitle";
import { NavLink } from "react-router-dom";

const Project = ({
  title,
  gitHub,
  site,
  behance,
  img,
  description,
  category,
  id,
}) => {
  return (
    <div className={styles.project}>
      <div className={styles.projectHover}>
        {/* {gitHub && <a
            href={gitHub}
            target="_blank"
            rel="noreferrer"
            className={` ${styles.icon}`}
          >
            <FaGithub />
          </a>}
          {behance && <a
            href={behance}
            target="_blank"
            rel="noreferrer"
            className={` ${styles.icon}`}
          >
            <FaBehanceSquare />
          </a>}
          {site && <a
            href={site}
            target="_blank"
            rel="noreferrer"
            className={`${styles.icon}`}
          >
            <FaGlobe />
          </a>} */}

        <NavLink to={`/projetos/${id}`}>
          <a
            href={gitHub}
            target="_blank"
            rel="noreferrer"
            className={` ${styles.icon}`}
          >
            <FaEye />
          </a>
        </NavLink>
      </div>
      <Subtitle text={title} margin="0" ball={category} />
      <img src={img} alt={title} />
      <p className={styles.projectDesc}>{description}</p>
    </div>
  );
};

export default Project;
