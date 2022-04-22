/// <reference types="cypress" />
describe('page', () => {
  it('hangs after completing', () => {
    describe('nested in an it', () => {
      it('super nested', () => {})
    })
    cy.visit('https://example.cypress.io')
  })
})
