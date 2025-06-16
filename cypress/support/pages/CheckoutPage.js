export class CheckoutPage {
    //propertites
    checkoutTitle = '.title'
    firstNameField = '#first-name'
    lastNameField = '#last-name'
    zipCodeField = '#postal-code'
    continueBtn = '#continue'
    cancelBtn = '#cancel'
    checkoutError = '.error-message-container'

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

    assertOnEmptyFirstName() {
        cy.get(this.checkoutError).should('be.visible').and('contain.text', 'Error: First Name is required')
    }

    assertOnEmptyLastName() {
        cy.get(this.checkoutError).should('be.visible').and('contain.text', 'Error: Last Name is required')
    }

    assertOnEmptyZipCode() {
        cy.get(this.checkoutError).should('be.visible').and('contain.text', 'Error: Postal Code is required')
    }

}