export class HomePage {
    //define properties of the page
    //appName = '.app_logo';
    appName = 'div:contains("Swag Labs")';
    subTitle = '[data-test="title"]';
    addToCart = '.btn_primary'
    shoppingCart = '.shopping_cart_badge'


    //define methods 
    selectRandomItem() {
        cy.get(this.addToCart).then(($products) => {
            const count = $products.length;
            const randomIndex = Math.floor(Math.random() * count);
            cy.wrap($products[randomIndex]).click();
        });
    }

    // define assertions
    assertOnHomePage(title) {
        cy.get(this.subTitle).should('contain', title);
    }
    assertShoppingCart() {
        cy.get(this.shoppingCart).should('be.visible')
    }

}