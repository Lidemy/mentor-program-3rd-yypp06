function isPrime(n) {
  if (n === 1) {
    return false;
  }
  for (let i = 2; i <= n - 1; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(39));
console.log(isPrime(37));
console.log(isPrime(22));

module.exports = isPrime;
