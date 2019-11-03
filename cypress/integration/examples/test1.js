/// <reference types="Cypress" />

describe('My first test suit', () => {
  it('my first case', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.get('.search-keyword').type('ca');
    cy.wait(2000);
    cy.get('.products').as('productLocator');
    cy.get('@productLocator').find('.product').should('have.length',4);
    cy.get('@productLocator').find('.product').eq(0).contains('ADD TO CART').click();
    cy.get('@productLocator').find('.product').each((el, index, list) => {
      const elText = el.find('h4.product-name').text();
      if (elText.includes('Carrot')) {
        el.find('button').click();
      }
    })
    cy.get('.brand').then(el => {
      cy.log(el.text());
    })
    cy.get('.brand').should('have.text', 'GREENKART');
  })
})