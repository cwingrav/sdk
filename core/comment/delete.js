const Requester = require('../Requester');

module.exports = (appData, comment) => Requester.delete(`${appData.host}comments`, Object.assign({
  applicationid: appData.id,
  appsecret: appData.secret,
}, comment));
