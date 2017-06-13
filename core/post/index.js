const create = require('./create');
const update = require('./update');
const deletePost = require('./delete');

module.exports = appData => ({
  create: create.bind(this, appData),
  update: update.bind(this, appData),
  delete: deletePost.bind(this, appData)
});
