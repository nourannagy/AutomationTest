const { defineConfig } = require("cypress");
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin')
const mochawesome = require("cypress-mochawesome-reporter/plugin");



module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    baseUrl: 'https://www.saucedemo.com',
    //pageLoadTimeout:20000,
    //watchForFileChanges:false,
    setupNodeEvents(on, config) {
      mochawesome(on);
      on('task', { downloadFile })
    },
  },
  //report configurations
      // reporter: 'mochawesome',
      // reporterOptions: {
      //   chart: true,
      //   overwrite: false,
      //   html: false,
      //   json: true,
      //   reportDir: 'cypress/reports/mochareports'
      // }
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports/mocha",
    overwrite: false,
    html: false,
    json: true,
    chart: true,
    reportPageTitle: "Test Report",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  }
});

