
Cypress.Commands.add('login_teste', (user, senha) => {
    cy.fixture("config.json").then((config) => { //usa os dados cadastrdos no json
    cy.visit('https://www.saucedemo.com/v1/')
    cy.get('[data-test="username"]').type(config.usuario)
    cy.get('[data-test="password"]').type(config.senha)
    cy.get('#login-button').click()
})
})