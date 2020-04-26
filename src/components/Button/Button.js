import React from 'react';
import styles from './Button.module.scss';

const Button = ({ secondary, children, href, addingQuote, ...props }) => {

  const secondaryStyle = secondary ? styles.secondary : styles.btnBasic ;
  // const addingQuoteStyle = addingQuote ? styles.addingQuote :styles.btnBasic;
  return (
    <>
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ) : (
        <button
          type="button"
          className={addingQuote ? styles.addingQuote : secondaryStyle}
          {...props}
        >
          {children}
        </button>
      )}
    </>
  );
};
export default Button;
