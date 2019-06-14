/// <reference types="cypress" />
/* globals describe, beforeEach, it, cy, expect */
import HttpStatus from 'http-status-codes'

describe('Login', () => {
  beforeEach(() => {
    cy.visit('/') // will be redirected to the login page
    cy.ensureUnloggedIn()
  })

  it('Try to login with incorrect username and password', () => {
    cy.server()
    cy.route('POST', '/api/login').as('login')

    cy.get('input[type=text]').type('noSuchUser')
    cy.get('input[type=password]').type('randomPassword')
    cy.get('form').submit()

    cy.wait('@login')
    cy.get('@login').then(xhr => {
      expect(xhr.status).to.eq(HttpStatus.UNPROCESSABLE_ENTITY)
      cy.url().should('include', '/login') // stay still
    })
  })

  it('Log in with the admin user', () => {
    cy.formLogin()
    cy.ensureLoggedIn()
  })
})
