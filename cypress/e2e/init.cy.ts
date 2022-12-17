/// <reference types="cypress" />

describe('App Initialisation', () => {
  it('Should have home in URL', () => {
    cy.visit('localhost:4200')
    cy.url().should('include', '/home')
  })
})
