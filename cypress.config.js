const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
  video: true,
  e2e: {
    baseUrl: "https://www.advantageonlineshopping.com/",
    viewportWidth: 1366, // Largura da tela
    viewportHeight: 768,
    requestTimeout: 10000,
    specPattern: "cypress/e2e/features/**/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
  },
});
