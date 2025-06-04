export class LoginPage {
    //open your system
    visit() {
        cy.visit('https://www.saucedemo.com/');
    }

    //define properties of the page
    usernameTxtField = '#user-name';
    passwordTxtField = '[type="password"]';
    loginBtn = '.submit-button.btn_action';
    loginError = '.error-message-container';

    //define methods
    enterUsername(username) {
        cy.get(this.usernameTxtField).type(username);
    }
    enterPassword(password) {
        cy.get(this.passwordTxtField).type(password);
    }
    pressLogin() {
        cy.get(this.loginBtn).click();
    }
    login(username, password) {
        this.enterUsername(username);
        this.enterPassword(password);
        this.pressLogin();
    }
    loginPasswordOnly(password) {
        this.enterPassword(password);
        this.pressLogin();
    }
    loginUsernameOnly(username) {
        this.enterUsername(username);
        this.pressLogin();
    }

    //define assertions

    assertOnUsernameOrPassword() {
        cy.get(this.loginError).should('be.visible').and('contain.text', 'Epic sadface: Username and password do not match any user in this service')
    }
    assertOnEmptyUsername() {
        cy.get(this.loginError).should('be.visible').and('contain.text', 'Epic sadface: Username is required')
    }
    assertOnEmptyPassword() {
        cy.get(this.loginError).should('be.visible').and('contain.text', 'Epic sadface: Password is required')
    }
}