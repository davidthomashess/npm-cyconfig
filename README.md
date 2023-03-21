# npm-cyconfig

### About

This npm will create the necessary directories and files needed to run Cypress in headless mode without running the GUI interface. It will include a test script called "spec.cy.js"

### Setup Cypress

npm install cypress --save-dev

npm install cyconfig --save-dev

npx cyconfig

npx cypress run --spec 'cypress/e2e/spec.cy.js'
