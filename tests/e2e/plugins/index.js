// https://docs.cypress.io/guides/guides/plugins-guide.html

// if you need a custom webpack configuration you can uncomment the following import
// and then use the `file:preprocessor` event
// as explained in the cypress docs
// https://docs.cypress.io/api/plugins/preprocessors-api.html#Examples

/* eslint-disable import/no-extraneous-dependencies, global-require, arrow-body-style */
const fs = require('fs')
const webpack = require('@cypress/webpack-preprocessor')

module.exports = (on, config) => {
  on('file:preprocessor', webpack({
    webpackOptions: require('@vue/cli-service/webpack.config'),
    watchOptions: {}
  }))

  // https://docs.cypress.io/api/commands/task.html#Read-a-file-that-might-not-exist
  on('task', {
    readFileMaybe (filename) {
      if (fs.existsSync(filename)) {
        return fs.readFileSync(filename, 'utf8')
      }
      console.warn(`\n=== ${filename} does not exist ===\n`)
      return null
    }
  })

  return Object.assign({}, config, {
    fixturesFolder: 'tests/e2e/fixtures',
    integrationFolder: 'tests/e2e/specs',
    screenshotsFolder: 'tests/e2e/screenshots',
    videosFolder: 'tests/e2e/videos',
    supportFile: 'tests/e2e/support/index.js',

    // https://github.com/cypress-io/snapshot#configuration
    useRelativeSnapshots: true,
    snapshotFileName: '.snapshot.js'
  })
}
