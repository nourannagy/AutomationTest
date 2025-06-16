
import { HomePage } from "../../support/pages/HomePage"
import { CheckoutPage } from "../../support/pages/CheckoutPage";
import { CartPage } from "../../support/pages/CartPage";

const homePage = new HomePage();
const checkoutPage = new CheckoutPage();
const cartPage = new CartPage();

beforeEach(() => {
    cy.signIn('standard_user', 'secret_sauce')
    homePage.selectRandomItem()
    homePage.openCartPage()
    cartPage.checkout()

})

it('Verify that user can compelete chekout by filling his data in the form', (() => {
    checkoutPage.fillCheckoutInfo('Ahmed', 'Ali', 559)
    checkoutPage.pressContinoue()
}))

it('Verify that user can cancel chekout ', (() => {
    checkoutPage.pressCancel()
    cartPage.asserOnCartTitle('Your Cart')
}))

it.only('Verify that system validates on first name', () => {
    checkoutPage.enterLastName('Ali')
    checkoutPage.enterZipCode(999)
    checkoutPage.pressContinoue()
})