import styles from './Project.module.css'
import { FaGithub, FaGlobe, FaBehanceSquare } from 'react-icons/fa';
import Subtitle from './Subtitle';

const Project = ({title, gitHub, site, behance, img, description, category,}) => {
  return (
          <div className={styles.project}>
          <div className={styles.projectHover}>
          {gitHub && <a
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
          </a>}
          </div>
          <Subtitle text={title} margin="0" ball={category} />
          <img src={img} alt={title} />
          <p className={styles.projectDesc}>{description}
          </p>
        </div>
  )
}

export default Project
