import React, { useState, useContext } from 'react';
import styles from './Form.module.scss';
import Context from '../../context';
import Input from '../Input/Input';
import Button from '../Button/Button';

const Form = () => {
  const context = useContext(Context);
  const [citation, setCitation] = useState('');
  const [author, setAuthor] = useState('');
  const { addQuoteHandler } = context;

  const postQuote = e => {
    e.preventDefault();
    addQuoteHandler({ citation, author });
  };

  return (
    <form onSubmit={postQuote} className={styles.wrapper} autoComplete="off">
      <Input
        label="Citation"
        tag="textarea"
        name="citation"
        maxLength={250}
        value={citation}
        onChange={e => setCitation(e.target.value)}
      />
      <Input
        label="Author"
        name="author"
        maxLength={80}
        value={author}
        onChange={e => setAuthor(e.target.value)}
      />

      <Button type="submit">Add new quote</Button>
    </form>
  );
};

export default Form;
