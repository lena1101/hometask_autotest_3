import { browser, by, element, ElementFinder, ExpectedConditions, Key } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { AutofleaRepository } from "../objectRepository/autoflea.obj";

const defaultTimeout = browser.params.defaultTimeout;

export = function exampleSteps() {
    const autofleaRepo = new AutofleaRepository;

    //Default cucumber timeout
    this.setDefaultTimeout(600 * 1000);

    //Loading browser hacks
    let browserHacks = new BrowserHacks;

    //Hooks
    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        //ACTIONS AFTER EXECUTING EACH TEST, I.E. CLEANUP
        await browserHacks.ClearBrowserData();
    });

    this.Given(/^I am on Onliner page$/, async () => {
        browser.navigate().to(browser.params.onlinerByURL);
    });

    this.Then(/^I move the cursor to autoflea market hyperlink$/, async () => {
        await browser.actions().mouseMove(autofleaRepo.autofleaByClass).perform();
    });

    this.Then(/^I see the list of cities$/, async () => {
        await browser.wait(ExpectedConditions.visibilityOf(await autofleaRepo.hoverMenuByClass), defaultTimeout, "Couldn't find hover menu");
        // let fleaMarketLink:ElementFinder = await element(by.xpath("//a[contains(text(), 'Барахолка')]"));
        // await fleaMarketLink.click();
        // await browser.wait(ExpectedConditions.urlContains("https://baraholka.onliner.by/"), defaultTimeout, "URL wasn't changed");
    });

}