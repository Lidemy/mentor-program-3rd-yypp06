function add(a, b) {
  const addNumber = Number(a) + Number(b);
  return addNumber.toString();
}
console.log(add('123456789', '22'));

module.exports = add;
