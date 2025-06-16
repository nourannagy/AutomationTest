
import { HomePage } from "../../support/pages/HomePage"
import { CheckoutPage } from "../../support/pages/CheckoutPage";
import { CartPage } from "../../support/pages/CartPage";
import { CheckoutOverviewPage } from "../../support/pages/CheckoutOverviewPage";

const homePage = new HomePage();
const checkoutPage = new CheckoutPage();
const cartPage = new CartPage();
const checkoutOverviewPage = new CheckoutOverviewPage();

beforeEach(() => {
    cy.signIn('standard_user', 'secret_sauce')
    homePage.selectRandomItem()
    homePage.openCartPage()
    cartPage.checkout()

})

it.only('Verify that user can compelete chekout by filling his data in the form', (() => {
    checkoutPage.fillCheckoutInfo('Ahmed', 'Ali', 559)
    checkoutPage.pressContinoue()
    checkoutOverviewPage.assertOnOverviewTitle('Checkout: Overview')
}))

it('Verify that user can cancel chekout ', (() => {
    checkoutPage.pressCancel()
    cartPage.asserOnCartTitle('Your Cart')
}))

it('Verify that system validates on first name', () => {
    checkoutPage.enterLastName('Ali')
    checkoutPage.enterZipCode(999)
    checkoutPage.pressContinoue()
    checkoutPage.assertOnEmptyFirstName()
})

it('Verify that system validates on last name', () => {
    checkoutPage.enterFirstName('Ahmed')
    checkoutPage.enterZipCode(999)
    checkoutPage.pressContinoue()
    checkoutPage.assertOnEmptyLastName()
})

it('Verify that system validates on last name', () => {
    checkoutPage.enterFirstName('Ahmed')
    checkoutPage.enterLastName('Ali')
    checkoutPage.pressContinoue()
    checkoutPage.assertOnEmptyZipCode()
})