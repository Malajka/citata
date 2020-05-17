import React from 'react';
import { PropTypes as T } from 'prop-types';
import styles from './ErrorMessage.module.scss';

const ErrorMessage = ({children}) => (
  <div className={styles.wrapper}>
    <h2>{children}</h2>
  </div>
);

ErrorMessage.propTypes = {
  children: T.arrayOf(T.object).isRequired,
};


export default  ErrorMessage;
