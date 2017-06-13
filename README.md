# Woveon SDK documentation
## Installation
``` npm install woveon-sdk --save ```
```javascript
import woveonSdk from 'woveon-sdk';
const sdk = woveonSdk(CUSTOM_HOST, CUSTOM_APPID, CUSTOM_APPSECRET);
```
```javascript
sdk.setHandlers({
    createPost: CUSTOM_CREATEPOST_HANDLER,
    updatePost: CUSTOM_UPDATEPOST_HANDLER,
    deletePost: CUSTOM_DELETEPOST_HANDLER,
    createComment: CUSTOM_CREATECOMMENT_HANDLER,
    updateComment: CUSTOM_UPDATECOMMENT_HANDLER,
    deleteComment: CUSTOM_DELETECOMMENT_HANDLER,
    toogleLike: CUSTOM_TOOGLELIKE_HANDLER
}
```
---
## Usage

``` All the strings are not limited by length. Although total size of data sent must not oversize 50mb. ```
#### Create post
```javascript
    sdk.waveonSdk.post.create({
        token: CUSTOM_TOKEN,
        author: CUSTOM_AUTHOR,
        authorUrl:CUSTOM_AUTHORURL,
        postId: CUSTOM_POSTID,
        subject: CUSTOM_SUBJECT,
        message: CUSTOM_MESSAGE,
    });
```
##### Input
    CUSTOM_TOKEN 
        type: string
        description: Token which is used to contact channel
    CUSTOM_AUTHOR
        type: string
        description: Author's name (is displayed on a page)
    CUSTOM_AUTHORURL
        type: string
        description: Author's avatar address (is displayed on a page)
    CUSTOM_POSTID
        type: string
        description: Post unique ID
    CUSTOM_SUBJECT
        type: string
        description: Post header
    CUSTOM_MESSAGE
        type: string
        description: Post text
##### Output
    *success*
        type: boolean
        description: Marker that indicates operation status (e.g. successful)
#### Update post
```javascript
    sdk.waveonSdk.post.update({
        token: CUSTOM_TOKEN,
        postId: CUSTOM_POSTID,
        subject: CUSTOM_SUBJECT,
        message: CUSTOM_MESSAGE,
    });
```
##### Input
    CUSTOM_TOKEN 
        type: string
        description: Token which is used to contact channel
    CUSTOM_POSTID
        type: string
        description: Post unique ID
    CUSTOM_SUBJECT
        type: string
        description: Post header
    CUSTOM_MESSAGE
        type: string
        description: Post text
##### Output
    *success*
        type: boolean
        description: Marker that indicates operation status (e.g. successful)
#### Delete post
```javascript
    sdk.waveonSdk.post.update({
        token: CUSTOM_TOKEN,
        postId: CUSTOM_POSTID
    });
```
##### Input
    CUSTOM_TOKEN 
        type: string
        description: Token which is used to contact channel
    CUSTOM_POSTID
        type: string
        description: Post unique ID
##### Output
    *success*
        type: boolean
        description: Marker that indicates operation status (e.g. successful)
#### Create commentary
```javascript
    sdk.waveonSdk.post.create({
        token: CUSTOM_TOKEN,
        author: CUSTOM_AUTHOR,
        authorUrl:CUSTOM_AUTHORURL,
        postId: CUSTOM_POSTID,
        commentId: CUSTOM_COMMENTID,
        message: CUSTOM_MESSAGE,
    });
```
##### Input
    CUSTOM_TOKEN 
        type: string
        description: Token which is used to contact channel
    CUSTOM_AUTHOR
        type: string
        description: Author's name (is displayed on a page)
    CUSTOM_AUTHORURL
        type: string
        description: Author's avatar address (is displayed on a page)
    CUSTOM_POSTID
        type: string
        description: Post unique ID
    CUSTOM_COMMENTID
        type: string
        description: Commentary unique ID
    CUSTOM_MESSAGE
        type: string
        description: Commentary text
##### Output
    *success*
        type: boolean
        description: Marker that indicates operation status (e.g. successful)
#### Update commentary
```javascript
    sdk.waveonSdk.post.update({
        token: CUSTOM_TOKEN,
        commentId: CUSTOM_COMMENTID,
        message: CUSTOM_MESSAGE,
    });
```
##### Input
    CUSTOM_TOKEN 
        type: string
        description: Token which is used to contact channel
    CUSTOM_COMMENTID
        type: string
        description: Commentary unique ID
    CUSTOM_MESSAGE
        type: string
        description: Commentary text
##### Output
    *success*
        type: boolean
        description: Marker that indicates operation status (e.g. successful)
#### Delete commentary
```javascript
    sdk.waveonSdk.post.update({
        token: CUSTOM_TOKEN,
        commentId: CUSTOM_COMMENTID
    });
```
##### Input
    CUSTOM_TOKEN 
        type: string
        description: Marker that indicates operation status (e.g. successful)
    CUSTOM_COMMENTID
        type: string
        description: Commentary unique ID
##### Output
    *success*
        type: boolean
        description: Marker that indicates operation status (e.g. successful)
#### Like\Dislike
```javascript
    sdk.waveonSdk.like.update({
        token: CUSTOM_TOKEN,
        postId: CUSTOM_POSTID,
        author: CUSTOM_AUTHOR,
        authorUrl:CUSTOM_AUTHORURL
    });
```
##### Input
    CUSTOM_TOKEN 
        type: string
        description: Token which is used to contact channel
    CUSTOM_POSTID
        type: string
        description: Commentary or Post unique ID
    CUSTOM_AUTHOR
        type: string
        description: Author's name (is displayed on a page)
    CUSTOM_AUTHORURL
        type: string
        description: Author's avatar address (is displayed on a page)
##### Output
    *success*
        type: boolean
        description: Marker that indicates operation status (e.g. successful)
---
### Listener
User performs some action, eg. creates commentary. Server side sends
data to some application. Listener awaits for those data.
```javascript
    const listener = (...args) => {
        return sdk.hookMethod(args);
    }
```