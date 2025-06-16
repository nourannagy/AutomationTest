import { CartPage } from "./CartPage";
import { CheckoutPage } from "./CheckoutPage";
import { HomePage } from "./HomePage";

const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();
const homePage = new HomePage();

export class CheckoutOverviewPage {
    //properities
    overviewTitle = '.title'
    overviewItems = '.cart_item'
    overviewItemsNmaes = '.inventory_item_name'
    finishBtn = '#finish'
    cancelBtn = '#cancel'
    successMsg = '.complete-header'

    //methods
    compareSelectedItemsinOverview() {
        homePage.getAddedItems().then((addedItems) => {
            homePage.openCartPage();
            cartPage.checkout()
            checkoutPage.fillCheckoutInfo('Ahmed', 'Ali', 785478)
            checkoutPage.pressContinoue()
            const overviewItemsArr = [];
            cy.get(this.overviewItemsNmaes).each(($el) => {
                cy.wrap($el).invoke('text').then((text) => {
                    overviewItemsArr.push(text.trim());
                });
            }).then(() => {
                expect(overviewItemsArr).have.members(addedItems);
            });
        });
    }

    finishCheckout() {
        this.compareSelectedItemsinOverview()
        cy.get(this.finishBtn).click()
    }


    //assertions
    assertOnOverviewTitle(title) {
        cy.get(this.overviewTitle).invoke('text').should('eq', title)
    }
    assertOnCheckoutSuccess(msg) {
        cy.get(this.successMsg).invoke('text').should('eq', msg)
    }
}