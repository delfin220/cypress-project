// ***********************************************
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



// // This command is used to ignore JavaScript errors (uncaught exceptions) that may occur on the page.

// export { }


let fullName = 'Cypress Full Name'
let userEmail = 'ya.cypress@gmail.com'
let currentAddress = 'Cypress, test, Glushko str.'
let permanentAddress = 'Cypress, test, Haydara str.'
let notValidEmail = 'ya.cypressgmail.com'

Cypress.Commands.add('ignoreUncaughtExceptions', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
  })
  


Cypress.Commands.add('visitAndPerformFullTest', (url) => {
    cy.visit('https://demoqa.com/text-box')
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
    
    cy.get('h1').contains('Text Box').should('be.visible')
  
    
    cy.get('header a img[src="/images/Toolsqa.jpg"]').should('be.visible')
  
    
    cy.get('.header-wrapper').contains('Elements').should('be.visible')
    cy.get('.header-wrapper').contains('Forms').should('be.visible')
    cy.get('.header-wrapper').contains('Alerts, Frame & Windows').should('be.visible')
    cy.get('.header-wrapper').contains('Widgets').should('be.visible')
    cy.get('.header-wrapper').contains('Interactions').should('be.visible')
    cy.get('.header-wrapper').contains('Book Store Application').should('be.visible')
  })

  Cypress.Commands.add('typeTextInTextBox', () => {
    cy.get('#userName').type(fullName)       
    cy.get('#userEmail-wrapper').type(userEmail)
    cy.get('#currentAddress').should('be.visible').type(currentAddress)
    cy.get('#permanentAddress').should('be.visible').type(permanentAddress)

  })


  Cypress.Commands.add('typeTextInTextBoxNotValidEmail', () => {
    cy.get('#userName').type(fullName)       
    cy.get('#userEmail-wrapper').type(notValidEmail)
    cy.get('#currentAddress').should('be.visible').type(currentAddress)
    cy.get('#permanentAddress').should('be.visible').type(permanentAddress)

  })

  Cypress.Commands.add('submitBtnCheck', () => {
    cy.get('#submit').click()
    cy.get('#output').should('be.visible')

  })


 
  

  export { }