const _async = require('asyncawait/async');
const _await = require('asyncawait/await');

module.exports = () => {
  describe('Delete', () => {
    it('Success', _async(() => {
      const post = _await(global.waveon.post.create({
        channelid: 1,
        author: 'author',
        authorUrl: 'authorurl',
        postId: 'postid',
        link: 'link',
        message: 'message',
        subject: 'subject',
        isDirect: false
      }));
      const comment = _await(global.waveon.comment.create({
        channelid: 1,
        postId: post.id,
        commentId: '123',
        author: 'author',
        authorurl: 'authorurl',
        message: 'message',
      }));
      _await(global.waveon.comment.delete({
        channelid: 1,
        commentId: comment.id,
      }));
    }));
  });
};
