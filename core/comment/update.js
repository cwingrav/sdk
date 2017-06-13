const Requester = require('../Requester');

module.exports = (appData, post) => Requester.put(`${appData.host}comments`, Object.assign({
  applicationid: appData.id,
  appsecret: appData.secret,
}, post));
