const assert = require('assert');
const _async = require('asyncawait/async');
const _await = require('asyncawait/await');

module.exports = () => {
  describe('Update', () => {
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
      let comment = _await(global.waveon.comment.create({
        channelid: 1,
        postId: post.id,
        commentId: '123',
        author: 'author',
        authorurl: 'authorurl',
        message: 'message',
      }));
      comment = _await(global.waveon.comment.update({
        channelid: 1,
        commentId: comment.id,
        message: 'message1',
      }));

      assert.deepEqual(comment, {
        _semaphore: comment._semaphore,
        author: 'author',
        authorurl: 'authorurl',
        commentid: '123',
        date: null,
        id: comment.id,
        image: '',
        ismedia: false,
        message: 'message1',
        postid: post.id.toString(),
        responsibleid: comment.responsibleid,
        video: ''
      });
    }));
  });
};
