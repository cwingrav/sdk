const Requester = require('../Requester');

module.exports = (appData, metadata) => Requester.post(`${appData.host}like`, Object.assign({
  applicationid: appData.id,
  appsecret: appData.secret,
}, metadata));
