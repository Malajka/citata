import React from 'react';
import styles from './views.module.scss';


const QuoteView = quote => (

    <div className={styles.wrapper}>
      <h3>{quote.quotation}</h3>
      <p>{quote.author}</p>
    </div>

);

export default QuoteView;
