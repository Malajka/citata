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
    const { cites, loading } = this.state;
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
// {
//   cites.map(cite => (
//     <QuoteItem {...cite} key={cite.id} />
//   ))
// }
// (
//   <>
//     {href ? (
//       <a href={href} target="_blank" rel="noopener noreferrer">
//         {children}
//       </a>
//     ) : (
//         <button className={secondaryStyle} {...props} >
//           {children}
//         </button>
//       )}
//   </>
// );
// { quoteOfTheDay.author }
// { isModalOpen && <div className={styles.openModalBlur} /> }
// <Context.Provider value={contextItems}>
//   {/* <QuoteWrapper cites={cites} /> */}
//   {!thankYouImg ? (
//     <>
//       {quoteOfTheDay !== 0 && (
//         < QuoteView quote />
//       )}
//       {/* {thankYouImg && <img src={ GratitudeImg} alt="gratitude" />} */}
//       {!showButton && Object.keys(quote).length === 0 && <LoadingView />}

//       {showButton && <InitialView showRandomQuote={this.showRandomQuote} />}

//       {/* {loading && <Loader />} */}
//       <Button onClick={this.openModal}>add new item</Button>
//       {isModalOpen && <Modal closeModal={this.closeModal} />}
//     </>
//   ) : (
//       <>
//         <ThankYouView />
//         <AddingQuoteView />
//       </>
//     )
// function handleChange() {
//     this.setState({ load: true })
//     this.props.actions.getItemsFromThirtParty(input)
//     this.setState({ load: false })
// };

// function  fetchQuotes async () {
//       try {
//         const yy = await this.onLoad()
//         const t = await setTimeout(() => {
//           this.setState({
//             quote: { ...quoteOfTheDay },
//           });
//         }, 2000)
//         // const p = await this.onLoad()

//       } catch (err) {
//         return err;
//       }
//     };

// return fetchQuotes();
//       // eslint-disable-next-line no-unused-expressions
//        async function handleChange () {

//       await this.setState(prevState => ({
//         loading: !prevState.loading,
//       }))
//        await  this.setState({ quote: { ...quoteOfTheDay }, loading: false })

//        }
// handleChange();

//  this.setState({ loading: false });
// this.showBtn();
// const { cites, loading } = this.state;
// const quoteOfTheDay = cites[Math.floor(Math.random() * cites.length)];
// import Modal from '../components/Modal/Modal';

// import Button from '../components/Button/Button';

// import LoadingView from '../views/LoadingView';

// import QuoteView from '../views/QuoteView';
