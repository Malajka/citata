import React from 'react';
import Context from '../context';
import Button from '../components/Button/Button';
import LoadingView from "./LoadingView";
import QuoteView from './QuoteView';
import styles from './views.module.scss';

const InitialView = () => (
  <Context.Consumer>
    {context => (
      <div className={styles.intlPgWrapper}>
        {context.showButton && (
          <Button onClick={context.showRandomQuote}>show me quote of the day</Button>
        )}

        {context.loading && <LoadingView />}
        {context.quote !== 0 && <QuoteView {...context.quote} />}

        <Button addingQuote onClick={context.openModal} />
      </div>
    )}
  </Context.Consumer>
);

export default InitialView;
