import styles from './Contact.module.css';
import Title from './Title';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaBehanceSquare } from 'react-icons/fa';
import { useState } from 'react';

const Contact = ({copyMail}) => {
  const [copyEmail, setCopyEmail] = useState(false);

  const handleEmail = () => {
    setCopyEmail(true);
    copyMail()

    setTimeout(() => setCopyEmail(false), 1500);
  };

  return (
    <footer className={`${styles.container} ${styles.light}`}>
      <Title text={'CONTATO'} dark={true} />
      <div className={styles.contacts}>
        <a
          href="https://github.com/oleosb/"
          target="_blank"
          rel="noreferrer"
          className={styles.contact}
        >
          <FaGithub className={styles.icon} /> oleosb
        </a>
        <a
          href="https://www.behance.net/4a493605"
          target="_blank"
          rel="noreferrer"
          className={styles.contact}
        >
          <FaBehanceSquare className={styles.icon} /> Leonardo Barbosa
        </a>
        <a
          href="https://www.linkedin.com/in/oleosb"
          target="_blank"
          rel="noreferrer"
          className={styles.contact}
        >
          <FaLinkedinIn className={styles.icon} /> Leonardo Barbosa
        </a>
        <button
          className={`${styles.contact} ${styles.contactEmail} ${
            copyEmail ? styles.copied : ''
          }`}
          onClick={handleEmail}
        >
          <FaEnvelope className={styles.icon} />
          oleosbo@gmail.com
        </button>
      </div>
    </footer>
  );
};

export default Contact;
