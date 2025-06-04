import { TryingPage } from "../../support/pages/TryingPage";

const tryingPage = new TryingPage();

beforeEach(() => {
    tryingPage.visit();
})

it('Verify that file is uploaded successfully', () => {
    tryingPage.selectFile('example.json');
})

it('Verify that you can select multiple options from combobox', () => {
    tryingPage.selectMultipleOptions('option 1', 'option 3');
})