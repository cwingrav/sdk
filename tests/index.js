global.isTest = false; //true;

const init = require('../index');
const core = require('./core');

//let host = process.env.WOVSDK_HOST;
//if ( host == null ) {
//    throw new Error("mocha tests for SDK require an env variables WOVSDK_HOST, pointing to the testing server (ex. local-api.woveon.com)");
//}

module.exports = () => {
  before(() => {
    global.waveon = init("http://localhost/",1, 'KVTKJNK6DN'); // CAW - added 1st param
  });
  describe('Tests', () => {
    core();
  });
};
