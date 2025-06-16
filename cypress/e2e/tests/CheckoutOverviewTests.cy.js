
import { HomePage } from "../../support/pages/HomePage"
import { CheckoutPage } from "../../support/pages/CheckoutPage";
import { CartPage } from "../../support/pages/CartPage";
import { CheckoutOverviewPage } from "../../support/pages/CheckoutOverviewPage";

const homePage = new HomePage();
const checkoutPage = new CheckoutPage();
const cartPage = new CartPage();
const checkoutOverviewPage = new CheckoutOverviewPage()

beforeEach(() => {
    cy.signIn('standard_user', 'secret_sauce')
    homePage.selectRandomItem()
})

it('Verify that all items in checkout overview are correct', () => {
    homePage.selectRandomItem();
    cy.then(() => homePage.selectRandomItem());
    checkoutOverviewPage.compareSelectedItemsinOverview()
})
it('Verify that all items in checkout overview are correct', () => {
    checkoutOverviewPage.finishCheckout()
    checkoutOverviewPage.assertOnCheckoutSuccess('Thank you for your order!')
})