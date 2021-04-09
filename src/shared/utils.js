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

export const contactDeveloper = () => {
  const msg = `Opa, e aí Pablo, tudo bueno? Testei tua aplicação até o final!`;

  const number = 5553981053550;

  window.open(`https://wa.me/${number}?text=${msg}`);
};
