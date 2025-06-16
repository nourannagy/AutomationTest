import { HomePage } from "../../support/pages/HomePage"
//import { LoginPage } from "../../support/pages/LoginPage"
import { CartPage } from "../../support/pages/CartPage";

const homePage = new HomePage();
const cartPage = new CartPage();
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

    it('Verify that user can open shopping cart cart successfully', () => {
        homePage.openCartPage()
        cartPage.asserOnCartTitle('Your Cart')
    })

    it.only('verify that i can get all added items', () => {
        homePage.selectRandomItem();
        homePage.getAddedItems()
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

    describe('Test social media links', () => {
        it('Verify that user can access LinkedIn link', () => {
            homePage.openSocialLink('LinkedIn');
            //homePage.assertOnLinkedinURL();
        })
        it('Verify that user can access Twitter link', () => {
            homePage.openSocialLink('Twitter');
        })
        it('Verify that user can access Facebook link', () => {
            homePage.openSocialLink('Facebook');
        })
    })
})