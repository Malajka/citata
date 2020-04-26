import React from 'react';
import Loader from '../components/Loader/Loader';
import styles from './views.module.scss';

const LoadingView = () => (
  <div className={styles.wrapper}>
    <Loader />
  </div>
);
export default LoadingView;
