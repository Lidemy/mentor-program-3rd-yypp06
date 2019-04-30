function isPalindromes(str) {
  const splitString = str.split('');
  const reverseStr = splitString.reverse('');
  const joinString = reverseStr.join('');

  if (str === joinString) {
    console.log(true);
  } else {
    console.log(false);
  }
}
isPalindromes('111111');
isPalindromes('lalalal');
isPalindromes('543212345');
isPalindromes('lslsls');

module.exports = isPalindromes;
