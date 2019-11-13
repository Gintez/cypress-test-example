describe('My second test suit', () => {
  it('my first case', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('#alertbtn').click();
    //window:alert
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })
    cy.get('#opentab').invoke('removeAttr', 'target');
    cy.url().should('include', 'academy');
    cy.go('back');
  })
})