export class HomePage {
    //define properties of the page
    appName = 'div:contains("Swag Labs")';
    subTitle = '[data-test="title"]';
    addToCart = '.btn_primary'
    shoppingCart = '.shopping_cart_badge'
    sideMenuButton = '#react-burger-menu-btn'
    closeiSdeMenu = '#react-burger-cross-btn'
    sideMenu = '.bm-menu-wrap'
    allItemsNames = '[data-test="inventory-item-name"]'
    filterMenu = '.product_sort_container'


    //define methods 
    selectRandomItem() {
        cy.get(this.addToCart).then(($products) => {
            const count = $products.length;
            const randomIndex = Math.floor(Math.random() * count);
            cy.wrap($products[randomIndex]).click();
        });
    }
    orderItemsByNameZA() {
        const itemNames = [];
        cy.get(this.allItemsNames).each(($el) => {
            itemNames.push($el.text().trim());
        }).then(() => {
            const sortedDescItems = itemNames.sort().reverse();
            console.log(`after sort : `, sortedDescItems);
        })

        const filteredItems = [];
        cy.get(this.filterMenu).select('za');
        cy.get(this.allItemsNames).each(($srtEl) => {
            filteredItems.push($srtEl.text().trim());
        }).then(() => {
            console.log(`after filter : `, filteredItems);
        })
        expect(filteredItems).to.deep.equal(itemNames);
    }

    openSideMenu() {
        cy.get(this.sideMenuButton).click();
    }
    closeSideMenu() {
        cy.get(this.closeiSdeMenu).click();
    }

    // define assertions
    assertOnHomePage(title) {
        cy.get(this.subTitle).should('contain', title);
    }
    assertShoppingCart() {
        cy.get(this.shoppingCart).should('be.visible')
    }
    assertSideMenuOpened() {
        cy.get(this.sideMenu).should('have.attr', 'aria-hidden', 'false')
    }
    assertSideMenuClosed() {
        cy.get(this.sideMenu).should('have.attr', 'aria-hidden', 'true')
    }
}