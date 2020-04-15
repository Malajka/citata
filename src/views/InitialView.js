import React from 'react';
import Button from '../components/Button/Button'

const InitialView = showRandomQuote => (
  <>
    <Button onClick={showRandomQuote}>show new quote</Button>
  </>
);

export default InitialView;
