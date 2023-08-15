import styles from './ProjectList.module.css'
import Project from './Project'

const ProjectList = ({projects}) => {
  return (
    <div className={styles.projects}>
        {projects.map((project, idx) => (
        <Project key={idx} {...project} />
      ))}
        </div>
  )
}

export default ProjectList
