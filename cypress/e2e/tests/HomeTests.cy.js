import { HomePage } from "../../support/pages/HomePage"
//import { LoginPage } from "../../support/pages/LoginPage"

const homePage = new HomePage();
//const loginPage = new LoginPage();

beforeEach(() => {
    cy.signIn('standard_user', 'secret_sauce')
    homePage.assertOnHomePage('Products')

})

describe('Test add items to cart', () => {
    it('Verify that user can add any item to the shopping cart successfully', () => {
        homePage.selectRandomItem();
        homePage.assertShoppingCart();
    })
})

describe('Test Sort feature', () => {
    it('Verify that user can sort products by name in desc. order', () => {
        homePage.orderItemsByNameZA();
    })

    it('Verify that user can sort products by price in asc. order', () => {
        homePage.orderItemsByPriceLowtoHigh();
    })

    it('Verify that user can sort products by price in desc. order', () => {
        homePage.orderItemsByPriceHightoLow();
    })

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