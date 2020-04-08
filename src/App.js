import React, { Component } from 'react';
import Context from './context';
import QuoteWrapper from './components/QuoteWrapper/QuoteWrapper';
import Modal from './components/Modal/Modal';

const API = 'http://localhost:3000/citations';

class App extends Component {
  state = {
    cites: [],
    isModalOpen: false,
  };


  componentDidMount() {
    this.getQuote();
  }

  componentDidUpdate() {
    this.showRandomQuote();
  }

  getQuote = async () => {
    const fetchQuotes = async () => {
      try {
        const result = await fetch(`${API}`);
        const data = await result.json();

        this.setState({
          cites: [...data],
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchQuotes();

  };

  showRandomQuote = () => {
    const { cites } = this.state;
    const quoteOfTheDay = cites[Math.floor(Math.random() *
      cites.length)]
    console.log(typeof quoteOfTheDay);
  }

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

    })
  };

  render() {
    const { isModalOpen } = this.state;

    const { cites } = this.state;
    const contextItems = {
      ...this.state,
      onSubmit: this.addQuote,
    };
    return (
      <div className="App">
        <Context.Provider value={contextItems}>
          <QuoteWrapper cites={cites} />
          <button type="button" onClick={this.openModal}>add new item</button>
          {isModalOpen && <Modal closeModal={this.closeModal} />}
        </Context.Provider>
      </div>
    );
  }
}

export default App;
