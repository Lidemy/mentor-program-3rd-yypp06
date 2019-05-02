function stars(n) {
  let starArry = [];
  let star = '';
  for (let i = 1; i <= n; i += 1) {
    star += '*';
    starArry = starArry.concat(star);
  }
  return starArry;
}
console.log(stars(5));

module.exports = stars;
