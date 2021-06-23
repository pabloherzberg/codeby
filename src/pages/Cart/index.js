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
import { formatPrice, contactD } from '../../shared/utils';
import { CartContext } from '../../context/Candies';

import minus from '../../assets/minus.svg';

function Cart() {
  // eslint-disable-next-line no-unused-vars
  const { selectedCandies, setSelectedCandies } = useContext(CartContext);
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const history = useHistory();

  useEffect(() => {
    if (selectedCandies.length > 0) {
      const auxArray = Object.values(selectedCandies).map((candy) =>
        Number.parseFloat(candy.price),
      );

      const t = auxArray.reduce((tot, current) => tot + current);

      setTotal(t);

      const map = new Map();

      selectedCandies.forEach((el) => {
        if (map.has(el.key)) {
          map.get(el.key).count += 1;
        } else {
          map.set(el.key, Object.assign(el, { count: 1 }));
        }
      });

      setItems(Object.fromEntries(map));
    } else {
      setTotal(0);
    }
  }, [selectedCandies]);

  function handleRemove(candy) {
    const find = selectedCandies.find((o) => o.key === candy.key);
    const listTemp = selectedCandies;
    const index = listTemp.indexOf(find);

    if (index !== -1) {
      listTemp.splice(index, 1);
    }
    if (listTemp.length === 0) {
      history.push('/');
    }

    setSelectedCandies([...listTemp]);
  }

  return (
    <Container total={total} selectedCandies={selectedCandies.length}>
      <header>Meu carrinho</header>
      <main>
        <ul>
          {items &&
            Object.values(items).map((candy) => (
              <li key={candy.key}>
                <img
                  loading="lazy"
                  src={candy.urlImage}
                  alt="Imagem representativa de um doce"
                />
                <div className="description">
                  <p>{candy.name}</p>
                  <p>R$ {Number.parseFloat(candy.price).toFixed(2)}</p>
                  <p>x {candy.count}</p>
                </div>
                <div id="minus">
                  <span onClick={() => handleRemove(candy)}>
                    <img src={minus} alt="remover" />
                    Remover
                  </span>
                </div>
              </li>
            ))}
        </ul>
      </main>
      <footer>
        <div>
          <p className="total">
            <span>Total</span>
            <span>R$ {total.toFixed(2)}</span>
          </p>
          {total > 1000 && (
            <p className="discount">Parabéns, sua compra tem frete grátis</p>
          )}
        </div>
        <button onClick={() => contactD(items)}>Finalizar compra</button>
      </footer>
    </Container>
  );
}

export default Cart;
