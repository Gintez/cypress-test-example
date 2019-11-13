describe('My fifth test suit', () => {
  it('my first case', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('tr td:nth-child(2)').each(($el, index, list) => {
      const elText = $el.text();
      if (elText.includes('Python')) {
        cy.get('tr td:nth-child(2)').eq(index).next().then(price => {
          expect(price.text()).to.equal('25');
        });
      }
    })
  })
})