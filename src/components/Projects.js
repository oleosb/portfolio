import styles from './Projects.module.css'
import ProjectList from './ProjectList'
import { projects } from '../helpers/projectList'
import { useState } from 'react'
import { useEffect } from 'react'

const Projects = () => {
  const [searchTxt, setSearchTxt] = useState('')

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  
  return (
    <main className={`${styles.container} ${styles.projectPg} dark`}>
      <input 
        type='text' 
        className={styles.searchInpt} 
        placeholder='Busque um projeto...' 
        onChange={({target}) => setSearchTxt(target.value.toLowerCase())}
      />

      <div className={styles.categories}>
      <div><div style={{backgroundColor: '#F8D210'}}></div> código</div>
        <div><div style={{backgroundColor: '#C55FFC'}}></div>design</div>
      </div>
        
      <ProjectList
        projects={projects.filter((project) =>
          project.tags.some(tag => tag.startsWith(searchTxt)),
        )}
      />
    </main>
  )
}

export default Projects
