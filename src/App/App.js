import React, { Component } from 'react';
import styles from './App.module.scss';
import '../index.css';
import Context from '../context';
import InitialView from '../views/InitialView';
import AddingQuoteView from '../views/AddingQuoteView';
import ThankYouView from '../views/ThankYouView';

const API = 'http://localhost:3000/citations';

class App extends Component {
  state = {
    cites: [],
    isModalOpen: false,
    quote: {},
    showButton: true,
    loading: false,
    thankYouImg: false,
  };

  componentDidMount() {
    this.getQuote();
  }

  showBtn = () => {
    this.setState({
      showButton: false,
    });
  };

  onLoad = () => {
    const { cites } = this.state;
    const quoteOfTheDay = cites[Math.floor(Math.random() * cites.length)];

    this.showBtn();
    setTimeout(() => {
      this.setState({
        quote: { ...quoteOfTheDay },

        loading: false,
      });
    }, 6200);
  };

  getQuote = async () => {
    const fetchQuotes = async () => {
      try {
        const result = await fetch(`${API}`);
        const data = await result.json();

        this.setState({
          cites: [...data],
        });
      } catch (err) {
        return err;
      }
    };
    fetchQuotes();
  };

  showRandomQuote = () => {
    this.setState({ loading: true });
    this.onLoad();
  };

  openModal = () => {
    return this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    return this.setState({
      isModalOpen: false,
    });
  };

  thankYouImg = () => {
    this.setState({
      thankYouImg: true,
    });
  };

  addQuote = async e => {
    e.preventDefault();

    // eslint-disable-next-line no-unused-vars
    const postData = await fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        quotation: e.target[0].value,
        author: e.target[1].value,
      }),
    });
    this.openModal();
    this.getQuote();
    this.closeModal();
    this.thankYouImg();
  };

  render() {
    const { isModalOpen, thankYouImg } = this.state;

    const contextItems = {
      ...this.state,
      addQuote: this.addQuote,
      showRandomQuote: this.showRandomQuote,
      openModal: this.openModal,
      closeModal: this.closeModal,
    };
    return (
      <Context.Provider value={contextItems}>
        {!thankYouImg ? <InitialView /> : <ThankYouView />}
        {isModalOpen && (
          <>
            <div className={styles.openModal} />
            <AddingQuoteView />
          </>
        )}
      </Context.Provider>
    );
  }
}

export default App;
