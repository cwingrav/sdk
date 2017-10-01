const fetch = require('node-fetch');

const isTest = global.isTest;

const Requester = {};

Requester.request = async (url, method, body) => {
  let retval = null;
  console.log(`SDK Requester: ${url} ${method}`);
  try {
    const r = isTest ? {
      json: () => (new Promise(resolve => resolve({
        success: true,
        data: {
          success: true,
          postId: 'messageId',
          commentId: 'messageid',
          author: 'author',
          authorurl: 'authorurl'
        }
      })))
    } : 
    await (
      fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: body ? JSON.stringify(body) : ''
      }).then( (result) => {
        console.log("ehere",result);
        if ( result.status == 200 ) { 
          //console.log("Requester to (",url,") returned ",result);
          return await(r.json());
        } else { throw new Error(`Bad fetch: ${url} ${method} returned code ${result.status}.`); }
      })/*.then( (result) => {
          if (result.success) { retval = result.data; }
          else { throw result.error; }
          }) */
      );
  } catch (e) { console.log(e); retval = null; }
  return retval;
};

Requester.get = url => Requester.request(url, 'get');


Requester.post = (url, body) => Requester.request(url, 'post', body);


Requester.put = (url, body) => Requester.request(url, 'put', body);


Requester.delete = (url, body) => Requester.request(url, 'delete', body);


module.exports = Requester;
