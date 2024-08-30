const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  defaultCommandTimeout: 6000,
  viewportWidth: 1500,
  viewportHeight: 990,
  scrollBehavior: 'center',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
