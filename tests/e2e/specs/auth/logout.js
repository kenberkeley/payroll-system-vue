/// <reference types="cypress" />
/* globals it, cy */
it('Logout', () => {
  cy.visit('/')
  cy.formLogin()

  cy.get('#headerNavMenu a.navbar-item').eq(0)
    .should('contain', 'Logout')
    .click({ force: true })

  cy.ensureUnloggedIn()
})
