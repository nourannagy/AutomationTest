// import { LoginPage } from "../pages/LoginPage"
// const loginPage = new LoginPage();


// Cypress.Commands.add('signIn', (username, password) => {
//     loginPage.visit();
//     loginPage.login(username, password);
// })

Cypress.Commands.add('signIn', (username, password) => {
    cy.visit('/')
    cy.get('#user-name').type(username)
    cy.get('[type="password"]').type(password)
    cy.get('.submit-button.btn_action').click()

})

