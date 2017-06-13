const create = require('./create');
const update = require('./update');
const deletePost = require('./delete');

module.exports = () => {
  describe('Comment', () => {
    create();
    update();
    deletePost();
  });
};
