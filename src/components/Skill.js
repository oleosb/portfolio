import styles from './Skill.module.css';

const Skill = ({ img }) => {
  return <div className={styles.skill}>{img}</div>;
};

export default Skill;
