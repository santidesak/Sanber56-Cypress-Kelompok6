// cypress/integration/address_spec.js
describe('Magento Address Management', () => {
    beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'))
    cy.login(Cypress.env('email'), Cypress.env('password'))
    cy.visit(Cypress.env('baseUrl') + 'customer/address/edit/')
    })

    it('successfully updates the address with valid inputs', () => {
      // Positive Scenario: Valid address update
    cy.get('#company').clear().type(Cypress.env('company'))
    cy.get('#telephone').clear().type(Cypress.env('telephone'))
    cy.get('#street_1').clear().type(Cypress.env('street'))
    cy.get('#city').clear().type(Cypress.env('city'))
    cy.get('#region_id').select(Cypress.env('region'))
    cy.get('#zip').clear().type(Cypress.env('zip'))
    cy.get('#country').select(Cypress.env('country'))
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()

      // Assert success message
    cy.get('.message-success').should('be.visible').and('contain', 'You saved the address.')
    })

    it('fails to update the address with missing required fields', () => {
      // Negative Scenario: Missing required fields
    cy.get('#company').clear().type(Cypress.env('company'))
    cy.get('#telephone').clear().type(Cypress.env('telephone'))
      cy.get('#street_1').clear() // Missing street address
    cy.get('#region_id').select(Cypress.env('region'))
    cy.get('#zip').clear().type(Cypress.env('zip'))
    cy.get('#country').select(Cypress.env('country'))
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()

      // Assert error message
    cy.get('.message-error').should('be.visible').and('contain', 'This is a required field.')
    })
})
