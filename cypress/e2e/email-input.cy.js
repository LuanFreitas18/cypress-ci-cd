describe('Teste básico', () => {
  it('acessa o site e preenche o campo Email', () => {
    cy.visit('https://www.qa-practice.com/elements/input/email')

    cy.get('#id_email')
      .should('be.visible')
      .type('example.mail@test.com')
      .should('have.value', 'example.mail@test.com')
  })
})
