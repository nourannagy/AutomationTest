export class HomePage {
    //define properties
    appName = 'div:contains("Swag Labs")';
    subTitle = '[data-test="title"]';
    addToCart = '.btn_primary'
    shoppingCart = '.shopping_cart_badge'
    shoppingCartIcon = '#shopping_cart_container'
    sideMenuButton = '#react-burger-menu-btn'
    closeiSdeMenu = '#react-burger-cross-btn'
    sideMenu = '.bm-menu-wrap'
    allItemsNames = '[data-test="inventory-item-name"]'
    allItemsPrices = '[data-test="inventory-item-price"]'
    filterMenu = '.product_sort_container'
    socialIcons = 'a[target="_blank"]'
    allProducts = '.inventory_item'
    addedItems = '[data-test*="remove"]'

    //define methods 
    selectRandomItem() {
        cy.get(this.addToCart).then(($products) => {
            const count = $products.length;
            const randomIndex = Math.floor(Math.random() * count);
            cy.wrap($products[randomIndex]).click();
        });
    }


    // parentsPractice() {
    //     let added = cy.get(this.allProducts).children().filter('[data-test="inventory-item-description"]').children().filter('.pricebar').children().filter(this.addedItems)
    //     let wholeElement = added.parent().parent()
    //     let titleText = wholeElement.invoke('text')
    //     console.log(titleText)
    // }

    getAddedItems() {
        const addedIemsArr = []
        return cy.get(this.allProducts)
            .filter((i, el) => Cypress.$(el).find(this.addedItems).length > 0)
            .find('.inventory_item_name')
            .each(($el) => {
                cy.wrap($el).invoke('text').then((text) => {
                    addedIemsArr.push(text.trim())
                });
            }).then(() => {
                return addedIemsArr;
            })
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

    orderItemsByPriceLowtoHigh() {
        const itemPrices = [];
        cy.get(this.allItemsPrices).each(($el) => {
            itemPrices.push($el.text().trim());
        }).then(() => {
            const sortedAscItems = itemPrices.sort();
            console.log(`after sort : `, sortedAscItems);
        })

        const filteredItems = [];
        cy.get(this.filterMenu).select('lohi');
        cy.get(this.allItemsPrices).each(($el) => {
            filteredItems.push($el.text().trim());
        }).then(() => {
            console.log(`after filter : `, filteredItems);
        })
        expect(filteredItems).to.deep.equal(itemPrices);
    }

    orderItemsByPriceHightoLow() {
        const itemPrices = [];
        cy.get(this.allItemsPrices).each(($el) => {
            itemPrices.push($el.text().trim());
        }).then(() => {
            const sortedDecItems = itemPrices.sort().reverse();
            console.log(`after sort : `, sortedDecItems);
        })

        const filteredItems = [];
        cy.get(this.filterMenu).select('hilo');
        cy.get(this.allItemsPrices).each(($el) => {
            filteredItems.push($el.text().trim());
        }).then(() => {
            console.log(`after filter : `, filteredItems);
        })
        expect(filteredItems).to.deep.equal(itemPrices);
    }

    openSideMenu() {
        cy.get(this.sideMenuButton).click();
    }
    closeSideMenu() {
        cy.get(this.closeiSdeMenu).click();
    }

    openSocialLink(paltform) {
        cy.get(this.socialIcons).contains(paltform).click()
    }

    openCartPage() {
        cy.get(this.shoppingCartIcon).click()
    }

    // define assertions
    assertOnHomePage(title) {
        // cy.get(this.subTitle).should('contain', title);
        cy.get(this.subTitle).invoke('text').should('eq', title)

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
    //needs fix
    // assertOnLinkedinURL() {
    //     cy.url().should('deep.equal', 'https://www.linkedin.com/company/sauce-labs/')
    // }
}