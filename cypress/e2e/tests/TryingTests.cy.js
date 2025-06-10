import { TryingPage } from "../../support/pages/TryingPage";

const tryingPage = new TryingPage();

beforeEach(() => {
    tryingPage.visit();
})
describe('Layout Two Form', () => {
    it('Verify that user can entre first name and last name successfully', () => {
        tryingPage.enterFirstName('Ahmed');
        tryingPage.enterLastName('Mohamed');
    })

    it('Verify that user can select gender successfully', () => {
        tryingPage.selectGender('female');
    })
    it('Verify that user can select one option from DLL successfully', () => {
        tryingPage.selectOptionFromDLL(1);
    })


    it('Verify that you can select multiple options from combobox', () => {
        tryingPage.selectMultipleOptions('option 1', 'option 3');
    })

    it('Verify that you can select multiple options from checkboxes', () => {
        tryingPage.selectFromcheckboxes('Option 1', 'Option 2');
    })
    // it.only('Verify that you can type any text and autocompelete', () => {
    //     tryingPage.typeAndGuess('straw{enter}');
    // })

    it('Verify that you can slide scroll up and down', () => {
        tryingPage.changeSlider();
        tryingPage.assertSliderIsChaned();
    })

    it('Verify that file is uploaded successfully', () => {
        tryingPage.selectFile('example.json');
    })

    it('Verify that you can select quantity from counter up', () => {
        tryingPage.selectQuantityUp()
    })
    it.only('Verify that you can select quantity from counter down', () => {
        tryingPage.selectQuantitydown()
    })
})

