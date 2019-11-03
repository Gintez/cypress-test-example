/// <reference types="Cypress" />

describe('My second test suit', () => {
  it('my first case', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.get('.search-keyword').type('ca');
    cy.wait(2000);
    cy.get('.products').find('.product').each((el, index, list) => {
      const elText = el.find('h4.product-name').text();
      if (elText.includes('Carrot')) {
        el.find('button').click();
      }
    })
    cy.get('.cart-icon > img').click();
    cy.contains('PROCEED TO CHECKOUT').click();
    cy.contains('Place order').click();
  })
})