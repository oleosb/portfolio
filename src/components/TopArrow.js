import { FaArrowCircleUp } from "react-icons/fa";
import styles from './TopArrow.module.css'
const TopArrow = () => {
  return (
    <div className={styles.topArrow} onClick={() => {window.scrollTo(0, window.offsetTop)}}>
      <FaArrowCircleUp />
    </div>
  )
}

export default TopArrow
