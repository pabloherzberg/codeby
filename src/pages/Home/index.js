/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
import React, { useContext, useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';
import { Container } from './styles';
import { CartContext } from '../../context/Candies';

import firebase from '../../shared/firebase';

import bpm from '../../assets/logo.png';

function Home() {
  // eslint-disable-next-line no-unused-vars
  const { setCandies } = useContext(CartContext);
  const [options, setOptions] = useState(false);

  const history = useHistory();

  useEffect(() => {
    firebase
      .database()
      .ref('pastas')
      .once('value')
      .then((snapshot) => {
        const snap = snapshot.val();
        if (snap) {
          const filtered = Object.values(snap).filter((o) => o.status);
          setOptions(Object.values(filtered));
          console.log(filtered);
        }
      });
  }, []);

  return (
    <Container>
      <header>
        <img src={bpm} alt="logo" />
        <h1>Brigadeiro pelo Mundo</h1>
      </header>
      <main>
        <ul>
          {options &&
            options.map((option) => (
              <li
                onClick={() => {
                  setCandies(option.flavors);
                  history.push('/cardapio');
                }}
              >
                <img
                  loading="lazy"
                  src={option.urlImage}
                  alt="Imagem representativa de um doce"
                />
                <div className="description">
                  <p>{option.name}</p>
                </div>
              </li>
            ))}
        </ul>
      </main>
    </Container>
  );
}

export default Home;
