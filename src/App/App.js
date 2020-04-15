import React, { Component } from 'react';
import styles from './App.module.scss';
import './index.css';
import Context from '../context';
import QuoteWrapper from '../components/QuoteWrapper/QuoteWrapper';
import Modal from '../components/Modal/Modal';
import GratitudeImg from './assets/gratitude.png';
import Button from '../components/Button/Button'
import Loader from '../components/Loader/Loader';

const API = 'http://localhost:3000/citations';

class App extends Component {
  state = {
    cites: [],
    isModalOpen: false,
    quote: {},
    showButton: true,
    loading:false,
    thankYouImg:false,
  };

  componentDidMount() {
    this.getQuote();
    this.onLoad();
  }

  // componentDidUpdate() {
  //   this.showRandomQuote();
  // }
  showBtn = () => {
    this.setState({
      showButton: false,
    });
  };


 onLoad = () => {
   this.setState(prevState => ({
     loading: !prevState.loading
   }));
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
    this.onLoad();
    const { cites } = this.state;
    const quoteOfTheDay = cites[Math.floor(Math.random() * cites.length)];
    setTimeout(() => {
      this.setState({
        quote: { ...quoteOfTheDay },
      });
    }, 3000);

    this.showBtn();



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
      thankYouImg: true
    })
  }

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
    const { cites, isModalOpen, quote, showButton, loading, thankYouImg  } = this.state;

    const contextItems = {
      ...this.state,
      onSubmit: this.addQuote,
    };
    const quoteOfTheDay = cites[Math.floor(Math.random() * cites.length)];
    return (
      <div className={styles.mainTheme}>


        {isModalOpen&&<div className={styles.openModalBlur} />}
        <Context.Provider value={contextItems}>
          {/* <QuoteWrapper cites={cites} /> */}
          {!thankYouImg ?
       (<>

       {Object.keys(quote).length !== 0 && <div className={styles.quoteTxt}>


              <h3>{quote.quotation}</h3>
              <p>{quote.author}</p>
          </div>

          }
          {/* {thankYouImg && <img src={ GratitudeImg} alt="gratitude" />} */}
          {!showButton && Object.keys(quote).length === 0  &&<Loader/>}



          {showButton && <Button onClick={this.showRandomQuote}>
            show new quote
            </Button> }


          {/* {loading && <Loader />} */}
          <Button onClick={this.openModal}>
            add new item
          </Button>
          {isModalOpen && <Modal closeModal={this.closeModal} />}
          </>) :(
            <>
             <img src={GratitudeImg} alt="gratitude" />
              <Button onClick={this.openModal}>
                add new item
          </Button>
          </>
          )
          }
        </Context.Provider>
      </div>
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
