import styles from './Button.module.css';

const Button = ({ link, text, margin, nav }) => {
  return (
    <button className={styles.btn} style={{margin: margin}}>
      {nav ? nav : <a href={link} target="_blank" rel="noreferrer">
        {text}
      </a>}
      
    </button>
  );
};

export default Button;
