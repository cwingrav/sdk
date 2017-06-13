const post = require('./post');
const comment = require('./comment');
const like = require('./like');
const activate = require('./activate');

module.exports = (appData, methods) => ({
  post: post(appData),
  comment: comment(appData),
  like: like(appData),
  hookMethod: (args) => {
    switch (args.type) {
      case 'createPost':
        return methods.createPost(args);
      case 'updatePost':
        return methods.updatePost(args);
      case 'deletePost':
        return methods.deletePost(args);
      case 'createComment':
        return methods.createComment(args);
      case 'updateComment':
        return methods.updateComment(args);
      case 'deleteComment':
        return methods.deleteComment(args);
      case 'like':
        return methods.like(args);
      case 'unlike':
        return methods.unlike(args);
      default:
        throw new Error('Undefined method');
    }
  },
  activate: activate.bind(this, appData),
});
