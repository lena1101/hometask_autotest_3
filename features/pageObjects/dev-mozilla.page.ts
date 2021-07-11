import { expect } from "chai";
import { browser, by, ExpectedConditions } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { MozillaRepository } from "../objectRepository/dev-mozilla.obj";

const defaultTimeout = browser.params.defaultTimeout;
const timeout = 1_000;

export class MozillaPage {
    [x: string]: any;
    
    mozillaRepo: MozillaRepository;

    constructor() {
        this.mozillaRepo = new MozillaRepository;
    }

    hasClass(element, cls) {
        return element.getAttribute('class').then((classes) => {
            return classes.split(' ').indexOf(cls) !== -1;
        });
    };

    public async clearBrowserData() {
        let browserHacks = new BrowserHacks;
        browserHacks.ClearBrowserData();
    }

    public navigateToMozillaSelect() {
        browser.navigate().to(browser.params.mozillaSelect);
    }

    public async selectClick() {
        await this.mozillaRepo.clickDDL.click();
    }

    public async selectCheck() {
        await this.mozillaRepo.optionSelect.click();
    }

    public async buttonClick() {
        await this.mozillaRepo.button.click();
    }
    public async titleCheck() {
        expect(await this.mozillaRepo.titleH1.getText()).equal('Technologie Internetowe dla developerów');
    }

    public async changeButton() {
        await this.mozillaRepo.changeButton.click();
    }
    public async title2Check() {
        expect(await this.mozillaRepo.titleH1.getText()).equal('Web technology for developers');
    }


}

