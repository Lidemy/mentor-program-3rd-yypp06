const request = require('request');
const process = require('process');

const method = process.argv[2];
const id = process.argv[3];
const newName = process.argv[4];
const api = 'https://lidemy-book-store.herokuapp.com';

if (method === 'read') {
  request(`${api}/books/${id}`,
    (err, res, body) => {
      const obj = JSON.parse(body);
      console.log(obj.name);
    });
} else if (method === 'list') {
  request(`${api}/books?_limit=20`,
    (err, res, body) => {
      const obj = JSON.parse(body);
      obj.forEach((e) => { console.log(e.id, e.name); });
    });
} else if (method === 'delete') {
  request.delete(`${api}/books/${id}`,
    () => {
      console.log(`Delete ${id}`);
    });
} else if (method === 'create') {
  request.post({
    url: `${api}/books`,
    form: {
      name: id,
    },
  },
  () => {
    console.log(`Create book ${id}`);
  });
} else if (method === 'update') {
  request.patch({
    url: `${api}/books/${id}`,
    form: {
      name: newName,
    },
  },
  () => {
    console.log(`update book ${newName}`);
  });
}
