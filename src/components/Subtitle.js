import styles from './Subtitle.module.css'

const Subtitle = ({text, margin, ball}) => {
  return (
    <h2 className={styles.subtitle} style={{margin: margin}}>
      {ball && <div className={styles.ball} style={{backgroundColor: ball}}></div>}
      {text}
    </h2>
  )
}

export default Subtitle
