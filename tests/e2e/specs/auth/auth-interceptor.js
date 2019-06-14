/// <reference types="cypress" />
/* globals describe, it, cy, expect */
import HttpStatus from 'http-status-codes'
import { TOKEN } from '~/src/constants/LocalStorageKeys'
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

  it('Try to request with a forged JWT', () => {
    const LS = window.localStorage

    cy.server()
    cy.route('GET', '/api/whoami').as('syncUser')

    LS.setItem(TOKEN, JSON.stringify('FAKE_JWT'))
    cy.visit('/')

    cy.wait('@syncUser')
    cy.get('@syncUser').then(xhr => {
      expect(xhr.status).to.eq(HttpStatus.UNAUTHORIZED)
      // eslint-disable-next-line
      expect(LS.getItem(TOKEN)).to.be.null // forged JWT has been clear
    })

    cy.reload()
    cy.ensureUnloggedIn()
  })
})
