import styles from './Title.module.css'

const Title = ({text, dark}) => {
  return (
    <h1 className={`${styles.title} ${dark ? styles.dark : styles.light}`}>
      {text}
    </h1>
  )
}

export default Title
