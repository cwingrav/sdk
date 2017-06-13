const Requester = require('../Requester');

module.exports = (appData, comment) => Requester.put(`${appData.host}posts`, Object.assign({
  applicationid: appData.id,
  appsecret: appData.secret,
}, comment));
