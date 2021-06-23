/* eslint-disable no-console */
export const formatPrice = (price) => {
  const arrayString = price.toString().split('');
  if (arrayString.length < 3) {
    return `R$ 0,${arrayString.join('')}`;
  }
  if (arrayString.length < 4) {
    return `R$ ${arrayString[0]},${arrayString[1]}${arrayString[2]}`;
  }
  if (arrayString.length < 5) {
    return `R$ ${arrayString[0]}${arrayString[1]},${arrayString[2]}${arrayString[3]}`;
  }
  if (arrayString.length < 6) {
    return `R$ ${arrayString[0]}${arrayString[1]}${arrayString[2]},${arrayString[3]}${arrayString[4]}`;
  }
  if (arrayString.length < 7) {
    return `R$ ${arrayString[0]}${arrayString[1]}${arrayString[2]}${arrayString[3]},${arrayString[4]}${arrayString[5]}`;
  }
  return 0;
};

export const contactD = (items) => {
  const auxArray = Object.values(items).map((candy) =>
    Number.parseFloat(candy.price),
  );

  const t = auxArray.reduce((tot, current) => tot + current);

  const msg = `Olá! Gostaria de fazer uma encomenda no valor de R$${t.toFixed(
    2,
  )}.%0aCom as seguintes quantidades:%0a`;

  let itemList = [];
  Object.values(items).map((item) =>
    itemList.push(`x${item.count} ${item.name}`),
  );
  itemList = itemList.splice(',').join('%0a');

  const formatedMsg = msg + itemList;

  const number = 557191159027;

  window.open(`https://wa.me/${number}?text=${formatedMsg}`);
};
