import { HomePage } from "../pages/HomePage"
import { LoginPage } from "../pages/LoginPage"

const homePage = new HomePage();
const loginPage = new LoginPage();

beforeEach(() => {
    loginPage.visit();
    loginPage.login('standard_user', 'secret_sauce');
    homePage.assertOnHomePage('Products');
})

describe('Test add items to cart', () => {
    it('Verify that user can add any item to the shopping cart successfully', () => {
        homePage.selectRandomItem();
        homePage.assertShoppingCart();
    })
})

it.only('Verify that user can sort products by name in desc. order', () => {
    homePage.orderItemsByNameZA();
})

describe('Test side menu', () => {
    it('Verify that user can view side menu options successfully', () => {
        homePage.openSideMenu();
        homePage.assertSideMenuOpened();
    })

    it('Verify that user can close side menu', () => {
        homePage.openSideMenu();
        homePage.closeSideMenu();
        homePage.assertSideMenuClosed();
    })
})