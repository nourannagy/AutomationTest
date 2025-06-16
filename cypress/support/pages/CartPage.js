import { HomePage } from "./HomePage"
const homePage = new HomePage();


export class CartPage {
    //define properties
    cartPageTitle = '.title'
    cartItemsNames = '.inventory_item_name'
    cartItems = '.cart_item'
    cartRemoveButtons = 'button[data-test*="remove"]'
    continueShoppingBtn = '#continue-shopping'
    checkoutBtn = '#checkout'
    itemDetailsName = '.inventory_details_name'


    //define methods

    compareSelectedItemsinCart() {
        homePage.getAddedItems().then((addedItems) => {
            homePage.openCartPage();
            const cartItemsArr = [];
            cy.get(this.cartItemsNames).each(($el) => {
                cy.wrap($el).invoke('text').then((text) => {
                    cartItemsArr.push(text.trim());
                });
            }).then(() => {
                expect(cartItemsArr).have.members(addedItems);
            });
        });
    }

    removeItemFromCart() {
        cy.get(this.cartItems).first().as('firstItem');
        cy.get('@firstItem').find('.inventory_item_name').invoke('text').then((itemTitle) => {
            const trimmedTitle = itemTitle.trim();
            cy.log(trimmedTitle)
            cy.get('@firstItem').find(this.cartRemoveButtons).click();
            cy.get('.cart_item .inventory_item_name').should('not.contain', trimmedTitle);
        });
    }

    continueShopping() {
        cy.get(this.continueShoppingBtn).click()
    }

    checkout() {
        cy.get(this.checkoutBtn).click()
    }

    showItemDetails() {
        cy.get(this.cartItems).first().as('firstItem');
        cy.get('@firstItem').find('.inventory_item_name').invoke('text').then((itemTitle) => {
            const trimmedTitle = itemTitle.trim();
            cy.log(trimmedTitle)
            cy.get('@firstItem').find('[href="#"]').click()
            cy.get(this.itemDetailsName).invoke('text').then((detailsTitle) => {
                expect(detailsTitle).to.be.eq(trimmedTitle)
            })
        });
    }


    // define assertions
    asserOnCartTitle(title) {
        cy.get(this.cartPageTitle).invoke('text').should('eq', title)
    }
}