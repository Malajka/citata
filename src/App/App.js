import React, { useState, useReducer } from 'react';
import styles from './App.module.scss';
import '../index.css';
import Context from '../context';
import BasicView from '../views/BasicView';
import AddingQuoteView from '../views/AddingQuoteView';
import ThankYouView from '../views/ThankYouView';
import ErrorMessage from '../components/ErrorMessage';

const API = 'https://citata-f1e20.firebaseio.com/citata.json';
const ErrorMsg = 'Something went wrong, please refresh the page';

const requestReducer = (requestState, action) => {
  switch (action.type) {
    case 'GET':
      return { loading: true, error: null };

    case 'POST':
      return { ...requestState, loading: false };
    case 'ADDED':
      return { ...requestState, added: true };
    case 'ERROR':
      return { loading: true, error: action.error };
    case 'CLEAR ERROR':
      return { ...requestState, error: null };
    default:
      throw new Error();
  }
};

const App = () => {
  const [quotes, setQuotes] = useState([]);
  const [requestState, dispatchRequest] = useReducer(requestReducer, {
    loading: false,
    error: null,
    added: false,
  });
  const [isModalOpen, setModal] = useState(false);
  const toggleModal = () => setModal(!isModalOpen);

  const addQuoteHandler = quote => {
    dispatchRequest({ type: 'POST' });
    fetch(API, {
      method: 'POST',
      body: JSON.stringify(quote),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        dispatchRequest({ type: 'GET' });
        return response.json();
      })
      .then(data => {
        setQuotes(prevQuotes => [...prevQuotes, { id: data.name, ...quote }]);
        dispatchRequest({ type: 'ADDED' });
        setModal(false);
      })
      .catch(() => {
        dispatchRequest({ type: 'ERROR', error: ErrorMsg });
      });
  };

  // const clearError = () => dispatchRequest({ type: 'CLEAR ERROR' });

  const showRandomQuote = () => {
    dispatchRequest({ type: 'GET' });
    setTimeout(() => {
      fetch(API)
        .then(response => response.json())
        .then(data => {
          const fetchedQuotes = [];
          // eslint-disable-next-line guard-for-in
          // eslint-disable-next-line no-restricted-syntax
          for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data,key)) {
              fetchedQuotes.push({
                id: key,
                author: data[key].author,
                citation: data[key].citation,
              });
            }
          }
          const quoteNumber = Math.floor(Math.random() * fetchedQuotes.length);
          setQuotes([fetchedQuotes[quoteNumber]]);
          dispatchRequest({ type: 'POST' });
        })
        .catch(() => {
          dispatchRequest({ type: 'ERROR', error: ErrorMsg });
        });
    }, 6200);
  };

  const contextItems = {
    addQuoteHandler,
    isModalOpen,
    toggleModal,
    quotes,
    showRandomQuote,
    loading: requestState.loading,
    error: requestState.error,
  };
  return (
    <Context.Provider value={contextItems}>
      <>
        {requestState.error ? (
          <ErrorMessage>{requestState.error}</ErrorMessage>
        ) : (
          <>
            <div className={isModalOpen ? styles.openModal : null} />
            {!requestState.added ? (
              <>
                <BasicView />
              </>
            ) : (
              <>
                <ThankYouView />
              </>
            )}
            <AddingQuoteView />
          </>
        )}
      </>
    </Context.Provider>
  );
};

export default App;
