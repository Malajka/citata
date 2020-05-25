import React, { useContext } from 'react';
import Context from '../context';
import styles from './views.module.scss';

const QuoteView = () => {
  const context = useContext(Context);
  const { quotes } = context;
  return (
    <div className={styles.quoteWrapper}>
      {quotes.map(quote => (
        <div key={quote.id}>
          <h3>{quote.citation}</h3>
          <p>{quote.author}</p>
        </div>
      ))}
    </div>
  );
};

export default QuoteView;
