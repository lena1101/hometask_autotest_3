import { browser, by, element, ElementFinder, ExpectedConditions, Key } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { AutofleaRepository } from "../objectRepository/autoflea.obj";
import { AutofleaPage } from "../pageObjects/autoflea.page";
import { HtmlbookPage } from "../pageObjects/htmlbook.page";
import { W3Page } from "../pageObjects/w3school.page";

const defaultTimeout = browser.params.defaultTimeout;

export = function exampleSteps() {

    const autofleaPage = new AutofleaPage;
    const w3SchoolPage = new W3Page;
    const htmlbookPage = new HtmlbookPage;

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
        autofleaPage.navigateToAutoflea();
    });

    this.Then(/^I move the cursor to autoflea market hyperlink$/, async () => {
        autofleaPage.cursorMove();
    });

    this.Then(/^I see the list of cities$/, async () => {
        autofleaPage.checkHover();
    });

    this.Given(/^I am on w3school page$/, async () => {
        w3SchoolPage.navigateToW3schools();
    });

    this.When(/^I click on checkbox$/, async () => {
        w3SchoolPage.checkboxClick();
    });

    this.Then(/^Checkbox must be checked$/, async () => {
        w3SchoolPage.checkboxCheck();
    });

    this.When(/^I click on radio$/, async () => {
        w3SchoolPage.radioClick();
    });

    this.Then(/^Radio must be checked$/, async () => {
        w3SchoolPage.radioCheck();
    });

    this.Given(/^I am on w3docs page$/, async () => {
        htmlbookPage.navigateTohtmlbook();
    });

    this.When(/^I click on select$/, async () => {
        htmlbookPage.selectClick();
    });

    this.Then(/^Option must be selected$/, async () => {
        htmlbookPage.selectCheck();
    });
}