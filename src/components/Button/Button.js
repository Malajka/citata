import React from 'react';
import { PropTypes as T } from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ secondary, children, href, addingQuote, ...props }) => {

  const secondaryStyle = secondary ? styles.secondary : styles.btnBasic ;
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


Button.propTypes = {
  secondary: T.bool,
  href: T.string,
  children: T.string,
  addingQuote: T.bool,
};
Button.defaultProps = {
  secondary: false,
  addingQuote:false,
  href:null,
  children:null,
}
export default Button;
