Cypress Project
Description

A project for testing a web application using Cypress. It contains tests for checking the functionality of a form on the demoqa.com website.

Installation
Clone the repository:
git clone (https://github.com/delfin220/cypress-project.git)
cd cypress-project

Install dependencies:
npm install

Ensure the required Node.js version is used:
nvm use


Running Tests
To run all tests:
npx cypress open
or
npm run cypress:open
To run tests in headless mode:
npx cypress run


Project Structure

    cypress/e2e/ - Folder containing the tests.
    cypress/support/commands.js - File with custom Cypress commands.
    .gitignore - File to ignore unnecessary files and folders in the repository.
    .nvmrc - File specifying the Node.js version.
    package.json - File for managing dependencies and scripts.


    
Notes

    The tests implement a replacement for non-breaking spaces to prevent issues with text validation.
    A command to ignore JavaScript errors (ignoreUncaughtExceptions) was added to prevent test interruptions.