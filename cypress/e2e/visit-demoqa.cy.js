import '../support/commands'

describe('Visit demoqa.com-textbox ', () => {
    it('Visit the demoqa and check the main elements is visible', () => {
      cy.ignoreUncaughtExceptions()
      cy.visit('https://demoqa.com/text-box')

      //Check headers logo
      cy.get('h1').contains('Text Box').should('be.visible')
      cy.get('header a img[src="/images/Toolsqa.jpg"]').should('be.visible') 

      // Checking the left menu items
      cy.get('.header-wrapper').contains('Elements').should('be.visible')
      cy.get('.header-wrapper').contains('Forms').should('be.visible')
      cy.get('.header-wrapper').contains('Alerts, Frame & Windows').should('be.visible')
      cy.get('.header-wrapper').contains('Widgets').should('be.visible')
      cy.get('.header-wrapper').contains('Interactions').should('be.visible')
      cy.get('.header-wrapper').contains('Book Store Application').should('be.visible')


  })
})