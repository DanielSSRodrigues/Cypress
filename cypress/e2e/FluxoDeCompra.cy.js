/// <reference types="Cypress"/>

describe('Teste E2E - Fluxo de Compras', () => {

it('Compra de produtos com sucesso', () => {
    cy.visit('https://www.saucedemo.com/v1/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')   
    cy.get('#login-button').click()
    cy.contains('Products').should('be.visible')  
// Ordenar campo de seleção 
    cy.get('.product_sort_container').select('Price (low to high)')
    cy.get('#item_2_title_link > .inventory_item_name').should('contain', 'Sauce Labs Onesie')
    cy.get('#item_0_title_link > .inventory_item_name').should('contain', 'Sauce Labs Bike Light')
    cy.get('#item_1_title_link > .inventory_item_name').should('contain', 'Sauce Labs Bolt T-Shirt')
    cy.contains('Sauce Labs Onesie').click()
    cy.contains('ADD TO CART').click()
    // voltar a lsita de produtos
    cy.wait(5000)
    cy.get('.inventory_details_back_button').click({ force: true });   //força o clique no botão
    cy.wait(5000)
})
})