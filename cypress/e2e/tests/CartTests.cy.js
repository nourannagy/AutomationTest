import { CartPage } from "../../support/pages/CartPage";
import { HomePage } from "../../support/pages/HomePage"
const cartPage = new CartPage();
const homePage = new HomePage();

beforeEach(() => {
    cy.signIn('standard_user', 'secret_sauce')
    homePage.selectRandomItem()
})


it.only('Verifyt that all added products from home page appears in cart page', () => {
    homePage.selectRandomItem();
    cy.then(() => homePage.selectRandomItem());
    cartPage.compareSelectedItemsinCart()

})