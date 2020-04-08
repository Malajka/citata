import  React from 'react';
import { PropTypes as T } from 'prop-types';
import styles from "./Input.module.scss";

const Input = ({ tag: Tag, name, label, maxLength, ...props  }) => (
  <div>
        <Tag className={Tag === 'textarea' ? styles.textarea : styles.input} placeholder={name} name={name} type="text" maxLength={maxLength} {...props}  />
    <label htmlFor={name}>{label}</label>
  </div>
);

Input.propTypes = {
    tag:T.string,
    name:T.string.isRequired,
    label:T.string.isRequired
}
Input.defaultProps = {
    tag:"input"
}

export default Input;
