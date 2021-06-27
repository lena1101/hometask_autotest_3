import { browser, by, element, ElementFinder, ExpectedConditions, Key } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { AutofleaRepository } from "../objectRepository/autoflea.obj";
import { AutofleaPage } from "../pageObjects/autoflea.page";
import { HtmlbookPage } from "../pageObjects/htmlbook.page";
import { W3Page } from "../pageObjects/w3school.page";
import { DemoqaPage } from "../pageObjects/demoqa.page";
import { OzonPage } from "../pageObjects/ozon.page";

const defaultTimeout = browser.params.defaultTimeout;

export = function exampleSteps() {

    const autofleaPage = new AutofleaPage;
    const w3SchoolPage = new W3Page;
    const htmlbookPage = new HtmlbookPage;
    const demoqaPage = new DemoqaPage;
    const ozonPage = new OzonPage;

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

    this.Given(/^I am on demoqa-select page$/, async () => {
        demoqaPage.navigateToDemoqaSelect();
    });

    this.When(/^I click on select$/, async () => {
        demoqaPage.selectClick();
    });

    this.Then(/^Option must be selected$/, async () => {
        demoqaPage.selectCheck();
    });

    this.Given(/^I am on demoqa-checkbox page$/, async () => {
        demoqaPage.navigateToDemoqaCheckbox();
    });

    this.When(/^I click on expand button$/, async () => {
        demoqaPage.buttonClick();
    });

    this.Then(/^The list must be expanded$/, async () => {
        demoqaPage.listCheck();
    });

    this.When(/^I click on Note checkbox$/, async () => {
        demoqaPage.clickCheckboxNotes();
    });

    this.Given(/^I am on demoqa-radiobutton page$/, async () => {
        demoqaPage.navigateToDemoqaRadiobutton();
    });

    this.When(/^I click on radiobutton$/, async () => {
        demoqaPage.radioButtonClick();
    });

    this.When(/^The value should be -Yes-$/, async () => {
        demoqaPage.checkValue();
    });

    this.Given(/^I am on demoqa-button page$/, async () => {
        demoqaPage.navigateToDemoqaButton();
    });

    this.When(/^I click on button 2 times$/, async () => {
        demoqaPage.buttonDoubleclick();
    });

    this.When(/^The button double-clicked$/, async () => {
        demoqaPage.clickCheck();
    });


    
    this.Given(/^I am on Ozon page$/, async () => {
        ozonPage.navigateToOzonByURL();
    });

    this.When(/^I click on Ozone Travel button$/, async () => {
        ozonPage.headerLinkClick();
    });

    this.When(/^I see Ozone Travel logo$/, async () => {
        ozonPage.checkValue();
    });
}