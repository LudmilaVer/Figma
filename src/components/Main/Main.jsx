import React from 'react';
import styles from './Main.module.css';
import ButtonList from '../ButtonList/ButtonList';

function Main() {
  return (
    <section className={styles.main}>
      <h1 className={styles.title}>LIFE IS WASTED ON THE LIVING</h1>
      <h2 className={styles.sign}>Sign in with</h2>
      <ButtonList />
    </section>
  );
}

export default Main;