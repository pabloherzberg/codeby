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
import cart from '../../assets/cart.svg';

function Home() {
  // eslint-disable-next-line no-unused-vars
  const { setCandies, selectedCandies } = useContext(CartContext);
  const [options, setOptions] = useState(false);
  const [itemsCount, setItemsCount] = useState(0);

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
        }
      });
  }, []);

  useEffect(() => {
    const map = new Map();

    selectedCandies.forEach((el) => {
      if (map.has(el.key)) {
        map.get(el.key).count += 1;
      } else {
        map.set(el.key, Object.assign(el, { count: 1 }));
      }
    });

    setItemsCount(Object.values(Object.fromEntries(map)).length);
  }, [selectedCandies]);

  return (
    <Container>
      <header>
        <img src={bpm} alt="logo" />
        <h1>Brigadeiro Pelo Mundo</h1>
        {itemsCount > 0 && (
          <div id="cart" onClick={() => history.push('/carrinho')}>
            <img src={cart} alt="carrinho" />
            <span>{itemsCount}</span>
          </div>
        )}
      </header>
      <main>
        <ul>
          {options &&
            options.map((option) => (
              <li
                key={option.key}
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
