const Requester = require('../Requester');

module.exports = (appData, post) => Requester.post(`${appData.host}posts`, Object.assign({
  applicationid: appData.id,
  appsecret: appData.secret,
}, post));
