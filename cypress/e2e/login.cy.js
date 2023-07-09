/// <reference types="Cypress"/>
describe('Teste Funcional de Login', () => {

    it('Validar Login com sucesso', () => {
        cy.visit('https://www.saucedemo.com/v1/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click()
        cy.contains('Products').should('be.visible')    
    });

    it('Validar Login incorreto', () => {
        cy.visit('https://www.saucedemo.com/v1/')
        cy.get('[data-test="username"]').type('incorreto')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click() 
        cy.get('[data-test="error"]').should('be.visible')    
    });

    it('Validar Senha incorreta', () => {
        cy.visit('https://www.saucedemo.com/v1/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('incorreta')
        cy.get('#login-button').click() 
        cy.get('[data-test="error"]').should('be.visible')    
    });
});

