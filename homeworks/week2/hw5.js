function join(str, concatStr) {
  let newStr = str[0];
  for (let i = 1; i < str.length; i + 1) {
    newStr += concatStr + str[i];
  }
  return newStr;
}

function repeat(str, times) {
  let newStr = str[0];
  for (let i = 0; i < times; i + 1) {
    newStr += str;
  }
  return newStr;
}

console.log(join(['a', 'b', 'c'], '!'));
console.log(repeat('yo', 5));
