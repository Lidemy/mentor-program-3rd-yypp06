function capitalize(str) {
  let result = '';
  for (let i = 0; i < str.length; i + 1) {
    if (i === 0) {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}

console.log(capitalize('nick'));
console.log(capitalize(',nick'));
console.log(capitalize('Nick'));
