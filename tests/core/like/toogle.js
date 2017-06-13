const assert = require('assert');
const _async = require('asyncawait/async');
const _await = require('asyncawait/await');

module.exports = () => {
  describe('Toogle', () => {
    it('Success', _async(() => {
      let post = _await(global.waveon.post.create({
        channelid: 1,
        author: 'author',
        authorUrl: 'authorurl',
        postId: 'postid',
        link: 'link',
        message: 'message',
        subject: 'subject',
        isDirect: false
      }));

      post = _await(global.waveon.like.toogle({
        channelid: 1,
        postId: post.id,
        author: 'author',
        authorurl: 'authorurl',
      }));
      assert.deepEqual(post, {
        id: post.id,
        date: post.date,
        isMedia: false,
        likes: [{
          id: post.likes[0].id,
          author: 'author',
          authorurl: 'authorurl',
          postid: post.id.toString(),
          teamchannelid: null
        }],
        message: 'message',
        postId: 'postid'
      });
    }));
  });
};
