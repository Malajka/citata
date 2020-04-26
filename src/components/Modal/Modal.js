import React from 'react';
import styles from './Modal.module.scss';
import Form from '../Form/Form';
import Button from '../Button/Button';

const Modal = ({ ...props }) => (
  <div className={styles.wrapper}>
    <Button secondary onClick={props.closeModal}>close</Button>
    <Form  {...props}/>
  </div>
);

export default Modal;
