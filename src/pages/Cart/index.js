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
import { formatPrice, contactDeveloper } from '../../shared/utils';
import { CartContext } from '../../context/Candies';

function Cart() {
  // eslint-disable-next-line no-unused-vars
  const { selectedCandies } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  const history = useHistory();

  useEffect(() => {
    if (selectedCandies.length > 0) {
      const auxArray = Object.values(selectedCandies).map(
        (candy) => candy.sellingPrice,
      );

      const t = auxArray.reduce((tot, current) => tot + current);

      setTotal(t);
    } else {
      setTotal(0);
    }
  }, [selectedCandies]);

  return (
    <Container total={total} selectedCandies={selectedCandies.length}>
      <header>Meu carrinho</header>
      <main>
        <ul>
          {selectedCandies.map((candy) => (
            <li>
              <img
                loading="lazy"
                src={candy.imageUrl}
                alt="Imagem representativa de um doce"
              />
              <div className="description">
                <p>{candy.name}</p>
                <p>{formatPrice(candy.price)}</p>
                <p>{formatPrice(candy.sellingPrice)}</p>
              </div>
            </li>
          ))}
        </ul>
      </main>
      <footer>
        <div>
          <p className="total">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </p>
          {total > 1000 && (
            <p className="discount">Parabéns, sua compra tem frete grátis</p>
          )}
        </div>
        <button onClick={() => contactDeveloper()}>Finalizar compra</button>
      </footer>
    </Container>
  );
}

export default Cart;
