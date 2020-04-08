import React from 'react';
import { PropTypes as T } from 'prop-types';
import styles from './QuoteItem.module.scss'

const QuoteItem = ({ author, quotation }) => {
  const AuthorTag = author ? 'h1' : 'span';
  return (
    <>
      <p>{quotation}</p>
      <AuthorTag className={author ? styles.author : styles.noAuthor}>{author}</AuthorTag>
    </>
  );
};

QuoteItem.propTypes = {
  author: T.string,
  quotation: T.string.isRequired,
};
QuoteItem.defaultProps = {
  author: null,
};

export default QuoteItem;
