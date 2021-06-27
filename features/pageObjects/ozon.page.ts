import { expect } from "chai";
import { browser, by, ExpectedConditions } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { OzonRepository } from "../objectRepository/ozon.obj";

const defaultTimeout = browser.params.defaultTimeout;

export class OzonPage {
    
    ozonRepo: OzonRepository;

    constructor() {
        this.ozonRepo = new OzonRepository;
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

    public navigateToOzonByURL() {
        browser.navigate().to(browser.params.ozonByURL);
    }

    // public navigateToDemoqaSelect() {
    //     browser.navigate().to(browser.params.demoqaSelect);
    // }

    // public navigateToDemoqaCheckbox() {
    //     browser.navigate().to(browser.params.demoqaCheckbox);
    // }

    // public navigateToDemoqaRadiobutton() {
    //     browser.navigate().to(browser.params.demoqaRadiobutton);
    // }

    // public navigateToDemoqaButton() {
    //     browser.navigate().to(browser.params.demoqaButton);
    // }

    // public async selectClick() {
    //     await this.demoqaRepo.oldSelect.element(by.cssContainingText('option', 'Black')).click();
    // }

    // public async selectCheck() {
    //     expect(await this.demoqaRepo.oldSelect.element(by.cssContainingText('option', 'Black')).isSelected()).equal(true);
    // }

    // public async buttonClick() {
    //     await this.demoqaRepo.expandButton.click();
    // }

    // public async listCheck() {
    //     expect(await this.hasClass(this.demoqaRepo.list, 'rct-node-expanded')).equal(true);
    // }

    // public async clickCheckboxNotes() {
    //     await this.demoqaRepo.checkboxNotes.click();
    // }

    // public async radioButtonClick() {
    //     await this.demoqaRepo.radiobuttonLabel.click();
    // }
    
    // public async checkValue() {
    //     expect(await this.demoqaRepo.value.getText()).equal('Yes');
    // }

    // public async buttonDoubleclick() {
    //     await browser.actions().doubleClick(this.demoqaRepo.button).perform();
    // }
    
    // public async clickCheck() {
    //     expect(await this.demoqaRepo.clickedButton.getText()).equal('You have done a double click');
    // }

    public async headerLinkClick() {
        await this.ozonRepo.headerLink.click();
    }
    
    public async checkValue() {
        expect(await this.ozonRepo.travelLogo.isPresent()).equal(true);
    }

}

