import { expect } from "chai";
import { browser, by, ExpectedConditions, protractor } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { AmazonRepository } from "../objectRepository/amazon.obj";

const defaultTimeout = browser.params.defaultTimeout;

export class AmazonPage {
    
    amazonRepo: AmazonRepository;

    constructor() {
        this.amazonRepo = new AmazonRepository;
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

    public navigateToAmazonByURL() {
        browser.navigate().to(browser.params.amazonByURL);
    }

    public async footerLinkClick() {
        await this.amazonRepo.footerLink.click();
    }
    
    public async checkValue() {
        expect(await this.amazonRepo.applyNowButton.isPresent()).equal(true);
    }

     public async applyNowButtonClick() {
        await this.amazonRepo.applyNowButton.click();
    }

    public async checkSignInForm() {
        expect(await this.amazonRepo.signInForm.isPresent()).equal(true);
    }




    public async fastSearchSendKeys() {
        await browser.wait(ExpectedConditions.visibilityOf(this.amazonRepo.fastSearch), defaultTimeout, "Fast Search not visible");
        await this.amazonRepo.fastSearch.sendKeys('Camera & Photo');
    }
    
    public async pressEnter() {
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
    }

     public async dropDownButtonClick() {
        await this.amazonRepo.dropDownButton.click();
    }

    public async lowToHighOption() {
        expect(await this.amazonRepo.lowToHighOption.isPresent()).equal(true);
    }

}

