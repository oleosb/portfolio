import { useState } from 'react';
import styles from './Header.module.css';
import sblogo from '../imgs/sb-logo-blue.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header>
      <NavLink to="/" end>
        <img src={sblogo} alt="SB Logo" className={styles.logo} />
      </NavLink>
      <ul
        className={`${styles.menuToggle} ${
          openMenu ? styles.openMenu : styles.closeMenu
        }`}
        onClick={handleMenu}
      >
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <ul
        className={`${styles.mainMenu} ${openMenu ? styles.openMenu : ''}`}
        onClick={handleMenu}
      >
        <li>
          <NavLink to="/" end>
            home
          </NavLink>
        </li>
        <li>
          <NavLink to="/sobre" end>
            sobre
          </NavLink>
        </li>
        <li>
          <NavLink to="/projetos" end>
            projetos
          </NavLink>
        </li>
        <li onClick={() => window.scrollTo(0, document.body.offsetHeight)}>
          <button href="#">contato</button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
