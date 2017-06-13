const assert = require('assert');
const _async = require('asyncawait/async');
const _await = require('asyncawait/await');

module.exports = () => {
  describe('Update', () => {
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
      post = _await(global.waveon.post.update({
        channelid: 1,
        postId: post.id,
        message: 'message1',
        subject: 'subject1'
      }));
      assert.deepEqual(post, {
        _semaphore: post._semaphore,
        id: post.id,
        date: post.date,
        deleted: false,
        direct: false,
        images: [],
        ismedia: false,
        lastactivity: post.date,
        message: 'message1',
        recipient: 'title',
        responsibleid: null,
        subject: 'subject1',
        teamchannelid: '1',
        unread: true,
        videos: [],
        link: 'link',
        postid: 'postid',
        author: 'author',
        authorurl: 'authorurl'
      });
    }));
  });
};
