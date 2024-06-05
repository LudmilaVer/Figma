import React from 'react';
import styles from './Header.module.css';
import Logo from '../../assets/Logo.svg';

function Header() {
  return (
    <header className={styles.header}>
      <img alt="Logo" src={Logo} />
    </header>
  );
}

export default Header;