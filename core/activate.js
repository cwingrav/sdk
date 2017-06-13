const Requester = require('./Requester');

module.exports = (appData, token, pageImage) => Requester.put(`${appData.host}`, Object.assign({
  applicationid: appData.id,
  appsecret: appData.secret,
  token,
  pageImage
}));
