import React, { useContext } from 'react';
import styled from 'styled-components';
import Context from '../context';
import GratitudeImg from '../assets/gratitude.png';
import styles from './views.module.scss';

const ThnkBtn = styled.button`
  background: none;
  color: #fff;
  border: none;
  font-size: 3rem;
  box-shadow: 0.2rem 0.6rem 0.3rem -0.4rem #ffa260;
  cursor: pointer;
  transition:0.2s ease-in;
  &:hover {
    box-shadow: 0.2rem 0.45rem 0.3rem -0.4rem #ffa260;
  }
`;

const ThankYouView = () => {
  const context = useContext(Context);
  const { toggleModal } = context;
  return (
    <div className={styles.thnkPgWrapper}>
      <img src={GratitudeImg} alt="thank_you_image" />
      <ThnkBtn onClick={toggleModal}>add another quote</ThnkBtn>
    </div>
  );
};

export default ThankYouView;
