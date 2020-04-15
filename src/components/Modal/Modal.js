import React from 'react';
import styles from './Modal.module.scss';
import Form from '../Form/Form';
import Button from '../Button/Button';

const Modal = ({ closeModal }) => (
  <div className={styles.wrapper}>
    <Button secondary onClick={closeModal}>close</Button>
    <Form onSubmit />
  </div>
);

export default Modal;
