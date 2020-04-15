import React from 'react';
import styles from './Loader.module.scss';
import hand from '../../assets/hand.png';

const Loader = () => {
return (
  <div className={styles.loaderContainer}>
    <div className={styles.loaderTxt}>FINDING YOUR QUOTE . . . </div>
        <svg className={styles.loaderStaticImg}

    >
      <path
        d="M49.015,0.803
    c-0.133-1.071-1.896-1.071-2.029,0
    C42.57,36.344,20,43.666,20,68.367
    C20,83.627,32.816,96,48,96
    s28-12.373,28-27.633
    C76,43.666,53.43,36.344,49.015,0.803z
    M44.751,40.09
    c-0.297,1.095-0.615,2.223-0.942,3.386
    c-2.007,7.123-4.281,15.195-4.281,24.537
    c0,5.055-2.988,6.854-5.784,6.854
    c-3.189,0-5.782-2.616-5.782-5.831
    c0-11.034,5.315-18.243,10.005-24.604
    c1.469-1.991,2.855-3.873,3.983-5.749
    c0.516-0.856,1.903-0.82,2.533,0.029
    C44.781,39.116,44.879,39.619,44.751,40.09z"
      />
    </svg>
    <img src={hand} className={styles.loaderImg} alt="hands" />
  </div>
);
}

export default Loader;
