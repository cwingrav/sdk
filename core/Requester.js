const fetch = require('node-fetch');

const Requester = {};

Requester.request = (url, method, body) => {
  console.log("SDK Requester: ", url, method);
  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: body ? JSON.stringify(body) : ''
  }).then(function(result) {
    return result.json();
  }).then((result) => {
      console.log(result);
      if (result.success) {
        return result.result;
      }
      throw result.error;
    });
};

Requester.get = url => Requester.request(url, 'get');


Requester.post = (url, body) => Requester.request(url, 'post', body);


Requester.put = (url, body) => Requester.request(url, 'put', body);


Requester.delete = (url, body) => Requester.request(url, 'delete', body);

module.exports = Requester;
