describe('Basic test', () => {
  it('visits the site and fills in the Email field', () => {
    cy.visit('https://www.qa-practice.com/elements/input/email')

    cy.get('#id_email')
      .should('be.visible')
      .type('example.mail@test.com')
      .should('have.value', 'example.mail@test.com')
  })
})
