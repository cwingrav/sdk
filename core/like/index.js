const like = require('./like');
const unlike = require('./unlike');

module.exports = appData => ({
  like: like.bind(this, appData),
  unlike: unlike.bind(this, appData),
});
