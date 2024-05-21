describe('Login', () => {
    it('Login Akun 1', () => {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/login')
      cy.get('#email').type('reza8@gmail.com')
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('Rezaanjas8')
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    })
    it('Login Akun 2', () => {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/login')
      cy.get('#email').type('reza88@gmail.com')
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('Rezaanjas8!')
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    })
    it('Login Akun Salah', () => {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/login')
      cy.get('#email').type('salah@gmail.com')
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('salah')
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    })
  })