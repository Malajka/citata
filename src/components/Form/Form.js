import React, { Component } from 'react';
// import { PropTypes as T } from 'prop-types';
import styles from './Form.module.scss';
import Context from '../../context';
import Input from '../Input/Input';
import Button from '../Button/Button';

class Form extends Component {
  state = {
    citation:'',
     author:'',
  }

  onInptChange = (e) => (
    this.setState({
      [e.target.name]: e.target.value
    })


  )

  render() {
    const {citation, author} = this.state;
    return (
      <Context.Consumer>
        {context => (
          <form onSubmit={context.onSubmit} className={styles.wrapper} autoComplete="off">

              <Input
                label="Citation"
                tag="textarea"
                name="citation"
                maxLength={250}
                value={citation}
                onChange={this.onInptChange}
              />
              <Input
                label="Author"
                name="author"
                maxLength={80}
                value={author}
                onChange={this.onInptChange}

              />

            <Button type="submit">Add new quote</Button>
          </form>
        )}
      </Context.Consumer>
    );
  }
}
export default Form;
