export class TryingPage {
    //open your system
    visit() {
        cy.visit('https://trytestingthis.netlify.app/');
    }
    //define properties of the page
    firstNameField = '#fname'
    lastNameField = '#lname'
    genderRadioOption = 'input[type="radio"][name="gender"]'
    dLL = '#option'
    multiDLLOptions = '#owc'
    checkBoxes = 'input[type="checkbox"]'
    //guessField = '[list="datalists"]'
    silderField = 'input[type="range"]'
    silderOutput = 'output[for="a"]'
    selectFileField = '#myfile'
    quantityField = '#quantity'


    //define methods of the page
    enterFirstName(fname) {
        cy.get(this.firstNameField).type(fname)
    }
    enterLastName(lname) {
        cy.get(this.firstNameField).type(lname)
    }

    selectGender(gender) {
        cy.get(this.genderRadioOption).check(gender);
    }
    selectOptionFromDLL(opt) {
        cy.get(this.dLL).select(opt)
    }

    selectMultipleOptions(value1, value2) {
        cy.get(this.multiDLLOptions).select([value1, value2])
    }

    selectFromcheckboxes(opt1, opt2) {
        cy.get(this.checkBoxes).check([opt1, opt2])
    }

    // typeAndGuess(text) {
    //     cy.get(this.guessField).type(text)

    // }

    changeSlider() {
        cy.get(this.silderField).invoke('val', 80).trigger('input').trigger('change');
    }

    selectFile(path) {
        cy.get(this.selectFileField).attachFile(path)
    }

    selectQuantityUp() {
        const count = 6
        cy.get(this.quantityField).focus().then($el => {
            Cypress._.times(count, () => {
                cy.wrap($el).type('{uparrow}')
            })
        })

        cy.get(this.quantityField).invoke('val').then(val => {
            const num = Number(val);
            expect(num).to.eq(count);
        })
        //cy.get(this.quantityField).focus().type('{uparrow}{uparrow}{uparrow}');
    }

    selectQuantitydown() {
        const count = 2
        cy.get(this.quantityField).focus().then($el => {
            Cypress._.times(count, () => {
                cy.wrap($el).type('{downarrow}')
            })
        })

        cy.get(this.quantityField).invoke('val').then(val => {
            const num = Number(val);
            expect(num).to.eq(1);
        })
    }

    //define assertions
    assertSliderIsChaned() {
        cy.get(this.silderOutput).should('have.value', 80)

    }

}