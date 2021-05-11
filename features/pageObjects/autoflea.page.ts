import { browser, by, ExpectedConditions } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { AutofleaRepository } from "../objectRepository/autoflea.obj";

const defaultTimeout = browser.params.defaultTimeout;

export class AutofleaPage {
    
    autofleaRepo: AutofleaRepository;

    constructor() {
        this.autofleaRepo = new AutofleaRepository;
    }

    public async clearBrowserData() {
        let browserHacks = new BrowserHacks;
        browserHacks.ClearBrowserData();
    }

    public navigateToAutoflea() {
        browser.navigate().to(browser.params.onlinerByURL);
    }

    public async cursorMove() {
        await browser.actions().mouseMove(this.autofleaRepo.autofleaByClass).perform();
    }

    public async checkHover() {
        await browser.wait(ExpectedConditions.visibilityOf(await this.autofleaRepo.hoverMenuByClass), defaultTimeout, "Couldn't find hover menu");
    }

}