import { expect } from "chai";
import { browser, by, ExpectedConditions } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { HtmlbookRepository } from "../objectRepository/htmlbook.obj";

const defaultTimeout = browser.params.defaultTimeout;

export class HtmlbookPage {
    
    htmlbookRepo: HtmlbookRepository;

    constructor() {
        this.htmlbookRepo = new HtmlbookRepository;
    }

    public async clearBrowserData() {
        let browserHacks = new BrowserHacks;
        browserHacks.ClearBrowserData();
    }

    public navigateTohtmlbook() {
        browser.navigate().to(browser.params.htmlbook);
    }

    public async selectClick() {
        await this.htmlbookRepo.select2.element(by.cssContainingText('option', 'Чебурашка')).click();
    }

    public async selectCheck() {
        expect(await this.htmlbookRepo.select2.element(by.cssContainingText('option', 'Чебурашка')).isSelected()).equal(true);
    }

}