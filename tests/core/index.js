const post = require('./post');
const comment = require('./comment');
const like = require('./like');

module.exports = () => {
  describe('Core', () => {
    post();
    comment();
    like();
  });
};
