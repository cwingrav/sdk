const create = require('./create');
const update = require('./update');
const deleteComment = require('./delete');

module.exports = appData => ({
  create: create.bind(this, appData),
  update: update.bind(this, appData),
  delete: deleteComment.bind(this, appData)
});
