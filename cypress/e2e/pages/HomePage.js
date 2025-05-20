export class HomePage {
    //define properties of the page
    //appName = '.app_logo';
    appName = 'div:contains("Swag Labs")';
    subTitle = '[data-test="title"]';


    //define methods and assertions

    assertOnHomePage(title) {
        cy.get(this.subTitle).should('contain', title);
    }


}