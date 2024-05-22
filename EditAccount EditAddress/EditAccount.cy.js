describe('Magento Account Management', () => {
    beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'))
    })

    it('updates account information successfully', () => {
      // Positive Scenario: Successful login and account update
    cy.login(Cypress.env('email'), Cypress.env('password'))
    
      // Assert successful login by checking if the user is redirected to the account page
    cy.url().should('include', '/customer/account/')
    
      // Navigate to Account Dashboard
    cy.visit(Cypress.env('baseUrl') + 'customer/account/')
    
      // Edit account information
    cy.get('.block-dashboard-info .box-actions .edit > span').click()
    cy.get('#firstname').clear().type('ngiha')
    cy.get('#lastname').clear().type('mumu')
    
      // Change email and password
    cy.get('#change-email').click()
    cy.get('#current-password').type(Cypress.env('password'))
    cy.get('#change-password').click()
    cy.get('#password').type(Cypress.env('newPassword'))
    cy.get('#password-confirmation').type(Cypress.env('newPassword'))
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()

      // Assert success message
    cy.get('.message-success').should('be.visible').and('contain', 'You saved the account information.')
    })

    it('fails to log in with incorrect credentials', () => {
      // Negative Scenario: Attempt to log in with invalid credentials
    cy.login(Cypress.env('invalidEmail'), Cypress.env('invalidPassword'))

      // Assert error message is displayed
    cy.get('.message-error').should('be.visible').and('contain', 'The account sign-in was incorrect or your account is disabled temporarily.')
    })

    it('fails to update account information with invalid current password', () => {
      // Positive Scenario: Successful login
    cy.login(Cypress.env('email'), Cypress.env('password'))
    
      // Navigate to Account Dashboard
    cy.visit(Cypress.env('baseUrl') + 'customer/account/')
    
      // Edit account information
    cy.get('.block-dashboard-info .box-actions .edit > span').click()
    cy.get('#firstname').clear().type('ngiha')
    cy.get('#lastname').clear().type('mumu')
    
      // Change email and password with invalid current password
    cy.get('#change-email').click()
    cy.get('#current-password').type(Cypress.env('invalidPassword'))
    cy.get('#change-password').click()
    cy.get('#password').type(Cypress.env('newPassword'))
    cy.get('#password-confirmation').type(Cypress.env('newPassword'))
    cy.get('#form-validate .actions-toolbar .action').click()

      // Assert error message is displayed
    cy.get('.message-error').should('be.visible').and('contain', 'The password you entered is incorrect.')
    })
})
