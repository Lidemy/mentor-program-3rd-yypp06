function stars(n) {
  for (let i = 1; i <= n; i + 1) {
    let newStar = '';
    for (let j = 1; j <= i; j + 1) {
      newStar += '*';
    }
    const starArray = newStar.split(',');
    console.log(starArray);
  }
}
stars(3);

module.exports = stars;
