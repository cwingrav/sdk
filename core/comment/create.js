const Requester = require('../Requester');

module.exports = (appData, comment) => Requester.post(`${appData.host}comments`, Object.assign({
  applicationid: appData.id,
  appsecret: appData.secret,
}, comment));
