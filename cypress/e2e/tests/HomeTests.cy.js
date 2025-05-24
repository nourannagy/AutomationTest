import { HomePage } from "../pages/HomePage"
import { LoginPage } from "../pages/LoginPage"

const homePage = new HomePage();
const loginPage = new LoginPage();

beforeEach(() => {
    loginPage.visit();
    loginPage.login('standard_user', 'secret_sauce');
    homePage.assertOnHomePage('Products');
})

describe('Test add to card', () => {
    it('log to console', () => {
        homePage.selectRandomItem();
        homePage.assertShoppingCart();
    })
})