import styles from './SkillList.module.css';
import Skill from './Skill';
import { skills } from '../helpers/skillList';

const SkillList = () => {
  return (
    <div className={styles.skillList}>
      {skills.map((skill, idx) => (
        <Skill key={idx} {...skill} />
      ))}
    </div>
  );
};

export default SkillList;
