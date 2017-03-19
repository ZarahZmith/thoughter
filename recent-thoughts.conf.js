module.exports = function karmaConf(confObj) {
  confObj.set({
    frameworks: [ 'mocha', 'chai' ],
    browsers: [ 'Chrome' ],
    singleRun: true,
    files: [
      'src/**/*.js',
      'node_modules/fetch-mock/es5/client-browserified.js',
      'test/specs/**/*.js'
    ]
  });
};
