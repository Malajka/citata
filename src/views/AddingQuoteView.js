import React from 'react';
import Modal from '../components/Modal/Modal';
import Context from '../context';


const AddingQuoteView = () =>(
 <Context.Consumer>
      {context =>(
      <> <Modal {...context} />
      </>
      )}
      </Context.Consumer>
      );



export default AddingQuoteView;
