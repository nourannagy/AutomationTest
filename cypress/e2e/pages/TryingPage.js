export class TryingPage {
    //open your system
    visit() {
        cy.visit('https://trytestingthis.netlify.app/');
    }
    //define properties of the page
    selectFileField = '#myfile';


    //define methods of the page
    selectFile(path) {
        cy.get(this.selectFileField).attachFile(path)
    }

    //define assertions

}