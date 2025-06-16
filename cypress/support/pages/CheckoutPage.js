export class CheckoutPage {
    //propertites
    checkoutTitle = '.title'
    firstNameField = '#first-name'
    lastNameField = '#last-name'
    zipCodeField = '#postal-code'
    continueBtn = '#continue'
    cancelBtn = '#cancel'

    //methods
    fillCheckoutInfo(fname, lname, zcode) {
        cy.get(this.firstNameField).type(fname)
        cy.get(this.lastNameField).type(lname)
        cy.get(this.zipCodeField).type(zcode)
    }

    pressContinoue() {
        cy.get(this.continueBtn).click()
    }

    pressCancel() {
        cy.get(this.cancelBtn).click()
    }

    enterFirstName(fname) {
        cy.get(this.firstNameField).type(fname)
    }
    enterLastName(lname) {
        cy.get(this.lastNameField).type(lname)

    }
    enterZipCode(zcode) {
        cy.get(this.zipCodeField).type(zcode)
    }
    //assertions
    assertOnCheckoutTitle(title) {
        cy.get(this.checkoutTitle).invoke('text').should('eq', title)
    }
}