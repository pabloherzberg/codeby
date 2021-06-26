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
import { contactD } from '../../shared/utils';
import { CartContext } from '../../context/Candies';

import minus from '../../assets/minus.svg';
import add from '../../assets/plus.svg';

import Modal from '../../Components/Modal';

function Cart() {
  // eslint-disable-next-line no-unused-vars
  const { selectedCandies, setSelectedCandies, minCount } = useContext(
    CartContext,
  );
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [modal, setModal] = useState(false);
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
    if (listTemp.length === 0) {
      history.push('/');
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

    if (
      list.some((el) => el.count < el.minCount) ||
      selectedCandies.length === 0
    ) {
      setModal(true);
    } else {
      contactD(items);
    }
  }

  return (
    <Container total={total} selectedCandies={selectedCandies.length}>
      {modal && (
        <Modal
          minCount={minCount}
          close={() => setModal(false)}
          text="Um dos itens do carrinho não possui quatidade suficiente, insira a quantidade mínima."
        />
      )}
      <header>Meu carrinho</header>
      <main>
        <ul>
          {items &&
            Object.values(items).map((candy) => (
              <li
                className={
                  candy.count < candy.minCount ? 'insuficient' : undefined
                }
                key={candy.key}
              >
                <img
                  loading="lazy"
                  src={candy.urlImage}
                  alt="Imagem representativa de um doce"
                />
                <div className="description">
                  <p>{candy.name}</p>
                  <p>R$ {Number.parseFloat(candy.price).toFixed(2)}</p>
                  <p>
                    x {candy.count}
                    <div>
                      <div onClick={() => handleRemove(candy)} id="minus">
                        <span>
                          <img src={minus} alt="remover" />
                          Remover
                        </span>
                      </div>
                      <div onClick={() => handleAdd(candy)} id="add">
                        <span>
                          <img src={add} alt="add" />
                          adicionar
                        </span>
                      </div>
                    </div>
                  </p>
                  <p>
                    Quantidade mínima:
                    {candy.minCount > 1
                      ? ` ${candy.minCount} unidades`
                      : ` ${candy.minCount} unidade`}
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
            <span>R$ {total.toFixed(2)}</span>
          </p>
          {total > 1000 && (
            <p className="discount">Parabéns, sua compra tem frete grátis</p>
          )}
        </div>
        <button onClick={() => checkCount()}>Finalizar compra</button>
      </footer>
    </Container>
  );
}

export default Cart;
