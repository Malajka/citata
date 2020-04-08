import React from 'react';
import styles from './Button.module.scss';

const Button = ({ secondary, children, href, ...props }) => {

  const secondaryStyle =  secondary ? styles.secondary : styles.button;
  return (
    <>
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ) : (
        <button className={secondaryStyle} {...props} >
          {children}
        </button>
      )}
    </>
  );
};
export default Button;
