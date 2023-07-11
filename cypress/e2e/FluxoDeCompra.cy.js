/// <reference types='cypress'/>

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
    //ADD product
    cy.contains('Sauce Labs Onesie').click()
    cy.contains('ADD TO CART').click()
    cy.wait(5000)
    // voltar a lista de produtos
    cy.get('.inventory_details_back_button').click({ force: true });   //força o clique no botão
    cy.wait(5000)
    //ADD product
    cy.contains('Sauce Labs Bike Light').click()
    cy.contains('ADD TO CART').click()
    // voltar a lista de produtos
    cy.get('.inventory_details_back_button').click({ force: true });   //força o clique no botão
    //ADD product
    cy.contains('Sauce Labs Bolt T-Shirt').click()
    cy.contains('ADD TO CART').click()
    // voltar a lsita de produtos
    cy.wait(5000)
    // voltar a lista de produtos0
    cy.get('.inventory_details_back_button').click({ force: true });   //força o clique no botão
    cy.wait(5000)
    
    //Assertiva
    cy.get('.shopping_cart_link').should('have.text', '3')
    cy.get('.shopping_cart_link').click()
    cy.get('#item_2_title_link > .inventory_item_name').should('contain', 'Sauce Labs Onesie')
    cy.get('#item_0_title_link > .inventory_item_name').should('contain', 'Sauce Labs Bike Light')
    cy.get('#item_1_title_link > .inventory_item_name').should('contain', 'Sauce Labs Bolt T-Shirt')

    //checkout
    cy.get('.btn_action').click()
    cy.get('[data-test="firstName"]').type('Primeiro nome')
    cy.get('[data-test="lastName"]').type('Último nome')
    cy.get('[data-test="postalCode"]').type('32113400')
    cy.get('.btn_primary').click()
    cy.get('.btn_action').click()

    // Assertiva compra finalizada
    cy.contains('THANK YOU FOR YOUR ORDER')

})
})