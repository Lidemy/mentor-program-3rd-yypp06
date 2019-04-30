function alphaSwap(str) {
  let newstr = '';
  for (let i = 0; i < str.length; i + 1) {
    if (str[i] >= 'a' && str <= 'z') {
      newstr += str[i].toUpperCase();
    } else if (str[i] >= 'A' && str <= 'Z') {
      newstr += str[i].toLowerCase();
    } else {
      newstr += str[i];
    }
  }
  return newstr;
}
console.log(alphaSwap('Hello'));

module.exports = alphaSwap;
