exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

  capabilities: {
    browserName: 'chrome',
      marionette: true
  },

    framework: 'jasmine2',

    specs: ['tests/*_spec.js'],

    allScriptsTimeout: 60000,
    getPageTimeout: 60000,
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 60000
    }
};