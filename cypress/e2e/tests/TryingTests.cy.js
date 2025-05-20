import { TryingPage } from "../pages/TryingPage";

const tryingPage = new TryingPage();

beforeEach(() => {
    tryingPage.visit();
})

it('Verify that file is uploaded successfully', () => {
    tryingPage.selectFile('example.json');
})