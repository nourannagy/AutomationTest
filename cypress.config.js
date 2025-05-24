const { defineConfig } = require("cypress");
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin')


module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      on('task', { downloadFile })
    },
  },
  //report configurations
  reporter: 'mochawesome',
  reporterOptions: {
    chart: true,
    overwrite: false,
    html: true,
    json: false,
    reportDir: 'cypress/reports'
  }
});

