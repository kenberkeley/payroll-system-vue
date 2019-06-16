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
/* global Cypress, cy, expect */
import HttpStatus from 'http-status-codes'
import { ADMIN_USER } from '~/api/config/'
import { TOKEN } from '~/src/constants/LocalStorageKeys'
require('@cypress/snapshot').register()

// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })

Cypress.Commands.add('inputField', (label, value) => {
  // refer to https://stackoverflow.com/a/55729653/5172890
  cy.contains('div.field', label).find('input').clear().type(value)
})

Cypress.Commands.add('ensureUnloggedIn', () => {
  cy.url().should('include', '/login')
  cy.get('h1').should('contain', 'Sign in to Pay Slip Generator')
  expect(window.localStorage.getItem(TOKEN)).to.be.null // eslint-disable-line
})

Cypress.Commands.add('formLogin', () => {
  cy.ensureUnloggedIn()

  cy.server()
  cy.route('POST', '/api/login').as('login')

  cy.inputField('Username', ADMIN_USER.username)
  cy.inputField('Password', ADMIN_USER.password)
  cy.get('form').submit()

  cy.wait('@login')
  cy.get('@login').then(xhr => {
    expect(xhr.status).to.eq(HttpStatus.OK)
    expect(xhr.responseBody.token).to.be.a('string')
    expect(xhr.responseBody.token).to.eq(
      JSON.parse(window.localStorage.getItem(TOKEN))
    )
  })
})

Cypress.Commands.add('quickLogin', () => {
  cy.ensureUnloggedIn()

  cy.request({
    method: 'POST',
    url: '/api/login',
    body: ADMIN_USER
  }).then(res => {
    expect(res.status).to.eq(HttpStatus.OK)
    expect(res.body.token).to.be.a('string')
    window.localStorage.setItem(TOKEN, JSON.stringify(res.body.token))
  })
})

Cypress.Commands.add('ensureLoggedIn', () => {
  cy.url().should('not.include', '/login')
  expect(window.localStorage.getItem(TOKEN)).to.not.be.null // eslint-disable-line
})

// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
