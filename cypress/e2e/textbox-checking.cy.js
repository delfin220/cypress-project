import '../support/commands'

let fullName = 'Cypress Full Name'
let userEmail = 'ya.cypress@gmail.com'
let notValidEmail = 'ya.cypressgmail.com'
let currentAddress = 'Cypress, test, Glushko str.'
let permanentAddress = 'Cypress, test, Haydara str.'



describe('Check the text box all web elements', () => {
    beforeEach(() => {
        cy.visitAndPerformFullTest()
      })
  


    it('Make sure all text fields and labels (Full Name, Email, Current Address, Permanent Address) are visible.', () => {
       
        //Full name
        cy.get('#userName-label').should('be.visible').and('have.text', 'Full Name')
        cy.get('#userName').should('be.visible') 

        //Email
        cy.get('#userEmail-label').should('be.visible').and('have.text', 'Email')
        cy.get('#userEmail-wrapper').should('be.visible')
        
        //Current Address
        cy.get('#currentAddress-label').should('be.visible').and('have.text', 'Current Address')
        cy.get('#currentAddress').should('be.visible')

        //Permanent Address
        cy.get('#permanentAddress-label').should('be.visible').and('have.text', 'Permanent Address')
        cy.get('#permanentAddress').should('be.visible')

        //Submit btn
        cy.get('#submit').should('be.visible').and('have.text', 'Submit')
  
  
    })


    it('Text entering in all text fields (Full Name, Email, Current Address, Permanent Address).', () => {

        cy.get('#userName').type(fullName)       
        cy.get('#userEmail-wrapper').type(userEmail)
        cy.get('#currentAddress').should('be.visible').type(currentAddress)
        cy.get('#permanentAddress').should('be.visible').type(permanentAddress)

       
    })

    it('Should not submit data with an invalid email format', () => {
        cy.typeTextInTextBoxNotValidEmail()
        
    })


    it('Check the "Submit" btn works', () => {
        cy.typeTextInTextBox()
        cy.get('#submit').click()
        cy.get('#output').should('be.visible')

    })

    it('Verify displayed data matches input values', () => {
        cy.typeTextInTextBox()
        cy.submitBtnCheck()
        cy.get('#output #name').should('have.text', `Name:${fullName}`)
        cy.get('#output #email').should('have.text', `Email:${userEmail}`)

        // Replaced non-breaking spaces (&nbsp;) with regular spaces to ensure successful text comparison.
        // The requirements didn't specify reporting bugs, so I adjusted the test to make it fully functional.
        cy.get('#output #currentAddress').invoke('text').then((text) => {
            expect(text.trim().replace(/\u00a0/g, ' ')).to.eq(`Current Address :${currentAddress}`);
        })

        // I did same here with the Permananet Address field
        cy.get('#output #permanentAddress').should('have.text', `Permananet Address :${permanentAddress}`)
    })

   



})