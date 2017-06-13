const Requester = require('../Requester');

module.exports = (appData, post) => Requester.delete(`${appData.host}posts`, Object.assign({
  applicationid: appData.id,
  appsecret: appData.secret,
}, post));
