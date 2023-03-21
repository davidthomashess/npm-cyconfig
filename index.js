#!/usr/bin/env node
// include node fs module
var fs = require("fs");

// writeFile function with filename, content and callback function
fs.mkdirSync("./cypress");
fs.mkdirSync("./cypress/e2e");
fs.mkdirSync("./cypress/fixtures");
fs.mkdirSync("./cypress/support");

fs.writeFile(
  "cypress.config.js",
  `const { defineConfig } = require("cypress");
 
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
`,
  function (err) {
    if (err) throw err;
    console.log("cypress.config.js created successfully.");
  }
);

fs.writeFile(
  "./cypress/e2e/spec.cy.js",
  `describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})
`,
  function (err) {
    if (err) throw err;
    console.log("./cypress/e2e/spec.cy.js created successfully.");
  }
);

fs.writeFile(
  "./cypress/fixtures/example.json",
  `{
  "name": "Using fixtures to represent data",
  "email": "hello@cypress.io",
  "body": "Fixtures are a great way to mock data for responses to routes"
}
`,
  function (err) {
    if (err) throw err;
    console.log("./cypress/fixtures/example.json created successfully.");
  }
);

fs.writeFile(
  "./cypress/support/commands.js",
  `// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
`,
  function (err) {
    if (err) throw err;
    console.log("./cypress/support/commands.js created successfully.");
  }
);

fs.writeFile(
  "./cypress/support/e2e.js",
  `// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
// Import commands.js using ES2015 syntax:
import './commands'
// Alternatively you can use CommonJS syntax:
// require('./commands')
`,
  function (err) {
    if (err) throw err;
    console.log("./cypress/support/e2e.js created successfully.");
  }
);
