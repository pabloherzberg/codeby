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
import { formatPrice } from '../../shared/utils';
import { CartContext } from '../../context/Candies';

import candies from '../../Database/candies.json';

import add from '../../assets/plus.svg';
import minus from '../../assets/minus.svg';

function Home() {
  // eslint-disable-next-line no-unused-vars
  const { selectedCandies, setSelectedCandies } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  const history = useHistory();

  function handleAdd(e) {
    setSelectedCandies([...selectedCandies, e]);
  }

  function handleRemove(candy) {
    const find = selectedCandies.find((o) => o.id === candy.id);
    const listTemp = selectedCandies;
    const index = listTemp.indexOf(find);

    if (index !== -1) {
      listTemp.splice(index, 1);
    }

    setSelectedCandies([...listTemp]);
  }

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
      <header>Cardápio</header>
      <main>
        <ul>
          {candies.items.map((candy) => (
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
                <p>
                  <span className="tot">
                    {selectedCandies.filter((o) => o.id === candy.id).length}
                  </span>
                  <span onClick={() => handleRemove(candy)}>
                    <img src={minus} alt="remover" />
                    Remover
                  </span>
                  <span onClick={() => handleAdd(candy)}>
                    <img src={add} alt="adicionar" />
                    Adicionar
                  </span>
                </p>
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
        <button
          onClick={
            selectedCandies.length > 0
              ? () => history.push('/carrinho')
              : () => {}
          }
        >
          Ir para o carrinho
        </button>
      </footer>
    </Container>
  );
}

export default Home;