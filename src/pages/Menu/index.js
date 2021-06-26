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

import add from '../../assets/plus.svg';
import minus from '../../assets/minus.svg';
import Modal from '../../Components/Modal';

function Menu() {
  // eslint-disable-next-line no-unused-vars
  const { selectedCandies, setSelectedCandies, candies, minCount } = useContext(
    CartContext,
  );
  const [total, setTotal] = useState(0);
  const [modal, setModal] = useState(false);

  const history = useHistory();

  function handleAdd(e) {
    /*  const arrayAux = [];
    for (let i = 0; i < minCount; i += 1) {
      arrayAux.push(e);
    }
    setSelectedCandies([...selectedCandies, ...arrayAux]); */
    setSelectedCandies([...selectedCandies, { ...e, minCount }]);
  }

  function handleRemove(candy) {
    const find = selectedCandies.find((o) => o.key === candy.key);
    const listTemp = selectedCandies;
    const index = listTemp.indexOf(find);

    if (index !== -1) {
      listTemp.splice(index, 1);
    }

    setSelectedCandies([...listTemp]);
  }

  function checkCount() {
    const map = new Map();

    selectedCandies.forEach((el) => {
      if (map.has(el.key)) {
        map.get(el.key).count += 1;
      } else {
        map.set(el.key, Object.assign(el, { count: 1 }));
      }
    });

    const items = Object.fromEntries(map);

    const list = Object.values(items);

    console.log(list);

    if (
      list.some((el) => el.count < el.minCount) ||
      selectedCandies.length === 0
    ) {
      if (
        list.some((el) => el.count < el.minCount) &&
        list.some((el) => el.count < minCount)
      ) {
        setModal(true);
      } else {
        history.push('/carrinho');
      }
    } else {
      history.push('/carrinho');
    }
  }

  useEffect(() => {
    if (selectedCandies.length > 0) {
      const auxArray = Object.values(selectedCandies).map((candy) =>
        Number.parseFloat(candy.price),
      );

      const t = auxArray.reduce((tot, current) => tot + current);

      setTotal(t);
    } else {
      setTotal(0);
    }
  }, [selectedCandies]);

  return (
    <Container total={total} selectedCandies={selectedCandies.length}>
      {modal && <Modal minCount={minCount} close={() => setModal(false)} />}
      <header>Cardápio</header>
      <main>
        <ul>
          {Object.values(candies).map((candy) => (
            <li key={candy.key}>
              <img
                loading="lazy"
                src={candy.urlImage}
                alt="Imagem representativa de um doce"
              />
              <div className="description">
                <p>{candy.name}</p>
                <p>R$ {Number.parseFloat(candy.price).toFixed(2)}</p>
                <p>
                  <span className="tot">
                    x{' '}
                    {selectedCandies.filter((o) => o.key === candy.key).length}
                  </span>
                  <span id="minus" onClick={() => handleRemove(candy)}>
                    <img src={minus} alt="remover" />
                    Remover
                  </span>
                  <span id="add" onClick={() => handleAdd(candy)}>
                    <img src={add} alt="adicionar" />
                    Adicionar
                  </span>
                </p>
                <p>
                  Quantidade mínima:
                  {minCount > 1
                    ? ` ${minCount} unidades`
                    : ` ${minCount} unidade`}
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
            <span>R$ {Number.parseFloat(total).toFixed(2)}</span>
          </p>
          {total > 1000 && (
            <p className="discount">Parabéns, sua compra tem frete grátis</p>
          )}
        </div>
        <button onClick={() => checkCount()}>Ir para o carrinho</button>
      </footer>
    </Container>
  );
}

export default Menu;
