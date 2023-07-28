module.exports = (str) => str.split('-').map((el) => {
  const firstElement = el.charAt(0).toUpperCase();

  return firstElement + el.slice(1);
}).join('');
