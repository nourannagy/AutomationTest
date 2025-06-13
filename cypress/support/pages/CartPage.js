import { HomePage } from "./HomePage"
const homePage = new HomePage();


export class CartPage {
    //define properties
    cartPageTitle = '.title'
    cartItems = '.inventory_item_name'


    //define methods

    compareSelectedItemsinCart() {
        homePage.getAddedItems().then((addedItems) => {
            homePage.openCartPage();
            const cartItemsArr = [];
            cy.get(this.cartItems).each(($el) => {
                cy.wrap($el).invoke('text').then((text) => {
                    cartItemsArr.push(text.trim());
                });
            }).then(() => {
                expect(cartItemsArr).have.members(addedItems);
            });
        });
    }

    // define assertions
    asserOnCartTitle(title) {
        cy.get(this.cartPageTitle).invoke('text').should('eq', title)
    }

}