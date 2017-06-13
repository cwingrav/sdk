global.isTest = true;

const init = require('../index');
const core = require('./core');

module.exports = () => {
  before(() => {
    global.waveon = init(1, 'KVTKJNK6DN');
  });
  describe('Tests', () => {
    core();
  });
};
