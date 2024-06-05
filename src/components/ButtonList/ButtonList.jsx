import React from 'react';
import Button from '../Button/Button';
import styles from './ButtonList.module.css';
import Apple from '../../assets/Apple.svg';
import Google from '../../assets/Google.svg';
import Xbox from '../../assets/Xbox.svg';

function ButtonList() {
  const srcArray = [Apple, Google, Xbox];

  return (
    <section className={styles.button_list}>
      {srcArray.map((src, index) => (
        <Button key={index} image={src} />
      ))}
    </section>
  );
}

export default ButtonList;