import React, { useContext } from 'react';
import Context from '../context';
import Button from '../components/Button/Button';
import LoadingView from './LoadingView';
import QuoteView from './QuoteView';
import styles from './views.module.scss';

const BasicView = () => {
  const context = useContext(Context);
  const { showRandomQuote, toggleModal,quotes, loading } = context;
  return (
    <div className={styles.intlPgWrapper}>
      {!loading ?
      <>
      {quotes.length !== 0 ?  <QuoteView /> :  <Button onClick={showRandomQuote}>show me quote of the day</Button>}
      </>
       :<LoadingView />}
        <Button addingQuote onClick={toggleModal} />
    </div>
  );
};

export default BasicView;
