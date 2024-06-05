import React from 'react';
import styles from './Button.module.css';

function Button({ image }) {
  return (
    <img src={image} alt="Sign In Button" className={styles.button} />
  );
}

export default Button;