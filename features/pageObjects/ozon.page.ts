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

    public async headerLinkClick() {
        await this.ozonRepo.headerLink.click();
    }
    
    public async checkValue() {
        expect(await this.ozonRepo.travelLogo.isPresent()).equal(true);
    }

    public async searchFieldClick() {
        await this.ozonRepo.searchField.click();
    }

    public async checkList() {
        expect(await this.ozonRepo.cityList.isPresent()).equal(true);
    }

    
    public async catalogMenuButtonClick() {
        await this.ozonRepo.catalogMenuButton.click();
    }
    
    public async sportRestOption() {
        browser.actions().mouseMove(this.ozonRepo.sportRestOption).perform();
        // expect(await this.ozonRepo.sportRestOption.isPresent()).equal(true);
    }

    public async decatlonLogo() {
        expect(await this.ozonRepo.decatlonLogo.isPresent()).equal(true);
       
    }

}

