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
      _await(global.waveon.post.delete({
        channelid: 1,
        postId: post.id,
      }));
    }));
  });
};
