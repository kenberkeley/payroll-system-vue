/// <reference types="cypress" />
/* globals describe, beforeEach, it, cy, expect */
import dayjs from 'dayjs'
import HttpStatus from 'http-status-codes'

describe('Generator', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.quickLogin()
    cy.visit('/generator/capture')
  })

  it('Implement the sample (John Smith)', () => {
    cy.server()
    cy.route('POST', '/api/payslips').as('save')

    cy.inputField('First Name', 'John')
    cy.inputField('Last Name', 'Smith')
    cy.inputField('Annual Salary', 60050)
    cy.inputField('Superannuation Rate', 9)
    cy.contains('Generate Payslip').click()

    cy.url().should('include', '/generator/preview')
    cy.get('h2').should('contain', 'Pay Slip for John Smith')
    cy.contains('tr', 'Pay Date').find('td').eq(1).should($td => {
      expect($td.text()).to.include(dayjs().endOf('M').format('D MMMM YYYY'))
      $td.text('') // Pay Date is changeable, should not be in the snapshots
    })
    cy.get('table').snapshot('PreviewJohnSmith')

    cy.get('button').should($btn => {
      expect($btn.text()).to.include('Pay')
      $btn.click()
    })
    cy.wait('@save')
    cy.get('@save').then(xhr => {
      expect(xhr.status).to.eq(HttpStatus.OK)
      expect(xhr.responseBody.id).to.be.a('string')
    })
    // go back to the Capture page
    cy.url().should('include', '/generator/capture')
  })

  it('Not allow to visit /generator/preview directly', () => {
    cy.visit('/generator/preview')
    cy.url().should('include', '/generator/capture')
  })

  it('Form validation', () => {
    cy.contains('Generate Payslip').click()
    cy.url().should('include', '/generator/capture') // stay still
    cy.get('form').snapshot('EmptyInput')

    cy.inputField('First Name', 'Foo')
    cy.inputField('Last Name', 'Bar')
    cy.inputField('Annual Salary', 80000)
    cy.inputField('Superannuation Rate', 10)
    cy.contains('Generate Payslip').click()
    cy.url().should('include', '/generator/preview')
  })
})
