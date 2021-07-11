import { expect } from "chai";
import { browser, by, ExpectedConditions } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { DemoqaRepository } from "../objectRepository/demoqa.obj";

const defaultTimeout = browser.params.defaultTimeout;
const timeout = 1_000;

export class DemoqaPage {
    [x: string]: any;
    
    demoqaRepo: DemoqaRepository;

    constructor() {
        this.demoqaRepo = new DemoqaRepository;
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

    public navigateToDemoqa() {
        browser.navigate().to(browser.params.demoqa);
    }

    public navigateToDemoqaSelect() {
        browser.navigate().to(browser.params.demoqaSelect);
    }

    public navigateToDemoqaCheckbox() {
        browser.navigate().to(browser.params.demoqaCheckbox);
    }

    public navigateToDemoqaRadiobutton() {
        browser.navigate().to(browser.params.demoqaRadiobutton);
    }

    public navigateToDemoqaButton() {
        browser.navigate().to(browser.params.demoqaButton);
    }

    public navigateTodemoqaModal() {
        browser.navigate().to(browser.params.demoqaModal);
    }
    public navigateToDemoqaIframes() {
        browser.navigate().to(browser.params.demoqaIframes);
    }


    public async selectClick() {
        await this.demoqaRepo.oldSelect.element(by.cssContainingText('option', 'Black')).click();
    }

    public async selectCheck() {
        expect(await this.demoqaRepo.oldSelect.element(by.cssContainingText('option', 'Black')).isSelected()).equal(true);
    }

    public async buttonClick() {
        await this.demoqaRepo.expandButton.click();
    }

    public async listCheck() {
        expect(await this.hasClass(this.demoqaRepo.list, 'rct-node-expanded')).equal(true);
    }

    public async clickCheckboxNotes() {
        await this.demoqaRepo.checkboxNotes.click();
    }

    public async radioButtonClick() {
        await this.demoqaRepo.radiobuttonLabel.click();
    }
    
    public async checkValue() {
        expect(await this.demoqaRepo.value.getText()).equal('Yes');
    }

    public async buttonDoubleclick() {
        await browser.actions().doubleClick(this.demoqaRepo.button).perform();
    }
    
    public async clickCheck() {
        expect(await this.demoqaRepo.clickedButton.getText()).equal('You have done a double click');
    }

    public async addButtonClick() {
        await this.demoqaRepo.addButton.click();
    }
    public async modalFormOpened() {
        expect(await this.demoqaRepo.modal.isPresent()).equal(true);
    }

    public async closeButtonClick() {
        await this.demoqaRepo.closeButton.click();
    }
    public async modalFormClosed() {
        expect(await this.demoqaRepo.modal.isPresent()).equal(false);
    }

    public async fieldFilling1() {
        await this.demoqaRepo.fieldFilling1.sendKeys('TEST');
        await browser.wait(ExpectedConditions.visibilityOf(this.demoqaRepo.fieldFilling1), timeout, "Fast Search not visible");
    }

    public async submitButtonClick() {
        await this.demoqaRepo.submitButton.click();
    }


    public async fieldFilling2() {
        await this.demoqaRepo.fieldFilling2.sendKeys('TEST');
        await browser.wait(ExpectedConditions.visibilityOf(this.demoqaRepo.fieldFilling2), timeout, "Fast Search not visible");
    }
    public async fieldFilling3() {
        await this.demoqaRepo.fieldFilling3.sendKeys('TEST@123.ru');
        await browser.wait(ExpectedConditions.visibilityOf(this.demoqaRepo.fieldFilling3), timeout, "Fast Search not visible");
    }
    public async fieldFilling4() {
        await this.demoqaRepo.fieldFilling4.sendKeys('30');
        await browser.wait(ExpectedConditions.visibilityOf(this.demoqaRepo.fieldFilling4), timeout, "Fast Search not visible");
    }
    public async fieldFilling5() {
        await this.demoqaRepo.fieldFilling5.sendKeys('10000');
        await browser.wait(ExpectedConditions.visibilityOf(this.demoqaRepo.fieldFilling5), timeout, "Fast Search not visible");
    }
    public async fieldFilling6() {
        await this.demoqaRepo.fieldFilling6.sendKeys('TEST@123.ru');
        await browser.wait(ExpectedConditions.visibilityOf(this.demoqaRepo.fieldFilling6), timeout, "Fast Search not visible");
    }


    public async iframeSwitchTo() {
        browser.switchTo().frame(this.demoqaRepo.iframe.getWebElement());
    }

    public async titleCheck() {
        expect(await this.demoqaRepo.title.getText()).equal('This is a sample page');
    }


}

