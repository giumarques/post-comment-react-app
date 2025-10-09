describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-qa="profile-box"]')
    cy.get('[data-qa="comment-input"]').first().type('RandomTest 123')
    cy.get('[data-qa="publish-button"]').first().click()
    cy.get('[data-qa="comment-text"]').contains('RandomTest 123')
    cy.get('[data-qa="comment-text"]').each(($element) => {
      if ($element.text() === 'RandomTest 123') {
        cy.get($element).siblings('header').children('[data-qa="delete-button"]').click()
      }
    })
  })
})