const request = require('request');

const clientId = '4xd1wa46xeu34o2iyx5xanw5op5e4n';
const api = 'https://api.twitch.tv/kraken/games/top';

request.get({
  url: `${api}`,
  headers: {
    'Client-ID': `${clientId}`,
  },
}, (error, response, body) => {
  const obj = JSON.parse(body);
  obj.top.forEach(e => console.log(`${e.game.id} ${e.game.name}`));
});
