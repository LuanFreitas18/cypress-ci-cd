describe('Password field', () => {
  // Meets all the listed requirements: 8+ chars, uppercase, lowercase, digit, special char.
  const validPassword = 'Abcdef1!'

  it('submits a valid password by pressing Enter and shows the success message', () => {
    cy.visit('https://www.qa-practice.com/elements/input/email')
    cy.contains('a', 'Password field').click()
    cy.url().should('include', '/elements/input/passwd')

    cy.get('#id_password')
      .should('be.visible')
      .and('have.attr', 'type', 'password')
      .type(validPassword)
      // The input value must not be exposed as plain text (the field stays masked).
      .should('have.value', validPassword)
      .and('have.attr', 'type', 'password')

    cy.get('#id_password').type('{enter}')

    // After submitting, the page reloads and displays the entered text as confirmation.
    cy.get('#result-text')
      .should('be.visible')
      .and('have.text', validPassword)
  })
})
