import React from 'react';
import Context from '../context';
import Button from '../components/Button/Button';
import GratitudeImg from '../assets/gratitude.png';
import styles from './views.module.scss';

const ThankYouView = () => (
  <Context.Consumer>
    {context => (
      <div className={styles.thnkPgWrapper}>
        <img src={GratitudeImg} alt="thank_you_image" />
        <Button onClick={context.openModal}>add another quote</Button>
      </div>
    )}
  </Context.Consumer>
);

export default ThankYouView;
