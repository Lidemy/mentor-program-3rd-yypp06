const request = require('request');
const process = require('process');

const method = process.argv[2];
const id = process.argv[3];

if (method === 'read') {
  request(`https://lidemy-book-store.herokuapp.com/books/${id}`,
    (err, res, body) => {
      const obj = JSON.parse(body);
      console.log(obj.name);
    });
} else if (method === 'list') {
  request('https://lidemy-book-store.herokuapp.com/books?_limit=20',
    (err, res, body) => {
      const obj = JSON.parse(body);
      obj.forEach((e) => { console.log(e.id, e.name); });
    });
}
