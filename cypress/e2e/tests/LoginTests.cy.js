import { LoginPage } from "../pages/LoginPage"
import { HomePage } from "../pages/HomePage"

const loginPage = new LoginPage();
const homePage = new HomePage();

beforeEach(() => {
    loginPage.visit();
})

describe('Test valid login', () => {
    it('Verify that user can login successfully with valid data', () => {
        loginPage.login('standard_user', 'secret_sauce');
        homePage.assertOnHomePage('Products');
    })

})

describe('Test invalid login', () => {
    it('Verify that user cannot login with wrong username', () => {
        loginPage.login('standard_user1', 'secret_sauce');
        loginPage.assertOnUsernameOrPassword()
    })

    it('Verify that user cannot login with wrong password', () => {
        loginPage.login('standard_user', 'secret_sauce1');
        loginPage.assertOnUsernameOrPassword()

    })
    it('Verify that user cannot login with wrong username and password', () => {
        loginPage.login('standard_user1', 'secret_sauce1');
        loginPage.assertOnUsernameOrPassword()

    })

    it('Verify that user cannot login with empty username', () => {
        loginPage.loginPasswordOnly('secret_sauce1');
        loginPage.assertOnEmptyUsername()

    })

    it('Verify that user cannot login with empty password', () => {
        loginPage.loginUsernameOnly('standard_user');
        loginPage.assertOnEmptyPassword();
    })

    it.only('Verify that user cannot login with empty username and password', () => {
        loginPage.pressLogin();
        loginPage.assertOnEmptyUsername();
    })

})