var config = require('config');

module.exports = {
  'Demo: GitHub URL Test': function (browser) {
    browser
      .url('https://github.com/' + config.repo.owner)
      .assert.urlEquals('https://github.com/' + config.repo.owner)
      .end();
  },
  'Demo: GitHub Title Test': function (browser) {
    browser
      .url('https://github.com')
      .assert.title('How people build software · GitHub')
      .end();
  }
};
