export class TryingPage {
    //open your system
    visit() {
        cy.visit('https://trytestingthis.netlify.app/');
    }
    //define properties of the page
    selectFileField = '#myfile'
    firstNameField = '#fname'
    lastNameField = '#lname'
    genderRadio = '[label for="gender"]'
    genderRadioOption = 'input[type="radio"][value="male"]'
    dLL = '#option'
    dLLOption = 'select [value="option 1"]'
    multiDLLOptions = '#owc'


    //define methods of the page
    selectFile(path) {
        cy.get(this.selectFileField).attachFile(path)
    }

    selectMultipleOptions(value1, value2) {
        cy.get(this.multiDLLOptions).select([value1, value2])
    }

    //define assertions

}