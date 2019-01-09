const qs = require('querystring');

function getBody(request) {
  return new Promise((resolve, reject) => {
    let body = [];
    request.on('data', chunk => body.push(chunk));
    request.on('end', () => {
      body = Buffer.concat(body).toString();
      switch (request.headers['content-type']) {
        case 'application/x-www-form-urlencoded':
          body = qs.parse(body);
          break;
        case 'application/json':
          body = JSON.parse(body);
          break;
        default:
          break;
      }
      resolve(body);
    });
    request.on('error', e => {
      console.error(`problem with request: ${e.message}`);
      reject(e.message);
    });
  });
}

module.exports = {
  getBody,
};
