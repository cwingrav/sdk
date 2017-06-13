const core = require('./core');

const appData = {};

module.exports = (host, appId, appSecret) => {
  appData.id = appId;
  appData.secret = appSecret;
  appData.host = host;

  const res = core(appData);
  let handlers;
  res.setHandlers = (cHandlers) => {
    handlers = cHandlers;
  };
  res.listener = (args) => {
    switch (args.type) {
      case 'createPost':
        return handlers.createPost && handlers.createPost(args);
      case 'updatePost':
        return handlers.updatePost && handlers.updatePost(args);
      case 'deletePost':
        return handlers.deletePost && handlers.deletePost(args);
      case 'createComment':
        return handlers.createComment && handlers.createComment(args);
      case 'updateComment':
        return handlers.updateComment && handlers.updateComment(args);
      case 'deleteComment':
        return handlers.deleteComment && handlers.deleteComment(args);
      default:
        throw new Error('Undefined command');
    }
  };

  return res;
};
