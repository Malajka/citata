import React from 'react';
import { PropTypes as T } from 'prop-types';
import styles from './Input.module.scss';

const Input = ({ tag: Tag, name, label, ...props }) => (
  <div className={styles.inpt}>
    <Tag
      className={Tag === 'textarea' ? styles.textarea : styles.input}
      placeholder={name}
      name={name}
      type="text"
      {...props}
    />
  </div>
);

Input.propTypes = {
  tag: T.string,
  name: T.string.isRequired,
  label: T.string.isRequired,
};
Input.defaultProps = {
  tag: 'input',
};

export default Input;
