import { expect } from "chai";
import { browser, by, ExpectedConditions } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { HtmlbookRepository } from "../objectRepository/htmlbook.obj";
import { W3Repository } from "../objectRepository/w3school.obj";

const defaultTimeout = browser.params.defaultTimeout;

export class W3Page {
    
    w3Repo: W3Repository;

    constructor() {
        this.w3Repo = new W3Repository;
    }

    public async clearBrowserData() {
        let browserHacks = new BrowserHacks;
        browserHacks.ClearBrowserData();
    }

    public navigateToW3schools() {
        browser.navigate().to(browser.params.w3schools);
    }

    public async checkboxClick() {
        await this.w3Repo.checkboxById.click();
    }

    public async checkboxCheck() {
        await expect(await this.w3Repo.checkboxById.isSelected()).equal(true);
    }

    public async radioClick() {
        await this.w3Repo.radioById.click();
    }

    public async radioCheck() {
        await expect(await this.w3Repo.radioById.isSelected()).equal(true);
    }

}