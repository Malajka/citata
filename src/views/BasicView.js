import React, { useContext } from 'react';
import Context from '../context';
import Button from '../components/Button/Button';
import LoadingView from './LoadingView';
import QuoteView from './QuoteView';
import Hero from '../components/Hero/Hero';
import styles from './views.module.scss';

const BasicView = () => {
  const context = useContext(Context);
  const { showRandomQuote, toggleModal,quotes, loading } = context;
  return (
    <div className={styles.intlPgWrapper}>
      {!loading ? (
        <div className={styles.intlPgWrapper}>
          {quotes.length !== 0 ? (
            <QuoteView />
          ) : (
            <>
              <button type="button" className={styles.btn} onClick={showRandomQuote}>
                <p> show me the </p> <span> quote</span> of the day
              </button>
              <Hero />
            </>
          )}
        </div>
      ) : (
        <LoadingView />
      )}
      <Button addingQuote onClick={toggleModal} />
    </div>
  );
};

export default BasicView;
