/// <reference types="cypress" />
/* globals describe, it, cy */
import { QUERY_REDIRECT_URL } from '~/src/constants/RouteFields'

describe('Auth interceptor', () => {
  it('Try to visit /generator directly without login', () => {
    cy.visit('/generator')

    cy.ensureUnloggedIn()
    cy.url()
      .should('include', QUERY_REDIRECT_URL)
      .and('include', 'generator')

    cy.formLogin()
    cy.ensureLoggedIn()
  })

  it('Try to visit /login after logged in will be redirected', () => {
    cy.visit('/login')
    cy.quickLogin()
    cy.visit('/login')
    cy.ensureLoggedIn()
  })
})
