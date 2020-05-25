import React from 'react';
import styles from './Hero.module.scss';
import plant from '../../assets/plant.png';

const Hero = () => (
  <div className={styles.wrapper}>
    <img src={plant} alt="plant" />
    <div className={styles.hero} />
  </div>
);

export default Hero;
