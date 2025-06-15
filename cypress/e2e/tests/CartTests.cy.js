import { CartPage } from "../../support/pages/CartPage";
import { HomePage } from "../../support/pages/HomePage"
const cartPage = new CartPage();
const homePage = new HomePage();

beforeEach(() => {
    cy.signIn('standard_user', 'secret_sauce')
    homePage.selectRandomItem()
})


it('Verifyt that all added products from home page appears in cart page', () => {
    homePage.selectRandomItem();
    cy.then(() => homePage.selectRandomItem());
    cartPage.compareSelectedItemsinCart()

})

it('Verify that user can remove item from cart', () => {
    homePage.selectRandomItem();
    cy.then(() => homePage.selectRandomItem());
    cartPage.compareSelectedItemsinCart()
    cartPage.removeItemFromCart()
})

it('Verify that user can go back to continoue shopping', () => {
    cartPage.compareSelectedItemsinCart()
    cartPage.continueShopping()
    homePage.assertOnHomePage('Products')
})

it('Verify that user can checkout his transactions', () => {
    cartPage.compareSelectedItemsinCart()
    cartPage.checkout()
    cartPage.assertOnCheckoutTitle('Checkout: Your Information')

})

it.only('Verify that user can see details of specific item from cart', () => {
    cartPage.compareSelectedItemsinCart()
    cartPage.showItemDetails()
})