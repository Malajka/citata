import React, { useContext } from 'react';
import Context from '../../context';
import styles from './Modal.module.scss';
import Form from '../Form/Form';
import Button from '../Button/Button';

const Modal = () => {
  const context = useContext(Context);
  const { isModalOpen } = context;
  const modalHandler = () => {
    context.toggleModal();
  };
  return (
    <>
      {isModalOpen && (
        <div className={styles.ModalOpen}>
          <Button secondary onClick={modalHandler}>
            close
          </Button>
          <Form />
        </div>
      )}
    </>
  );
};

export default Modal;
