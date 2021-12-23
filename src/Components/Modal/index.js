/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';

import { Container } from './styles';

import okImg from '../../assets/okay.png';

function Modal({ minCount, close, text = false }) {
  return (
    <Container>
      <div>
        <h1>Eita!</h1>
        <p>{text || `Quantidade mínima de ${minCount} para este produto.`}</p>
        <button onClick={close}>
          <img src={okImg} alt="OK" />
        </button>
      </div>
    </Container>
  );
}

export default Modal;
