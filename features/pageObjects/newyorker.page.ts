import { expect } from "chai";
import { browser, by, element, ExpectedConditions, promise, protractor } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { NewyorkerRepository } from "../objectRepository/newyorker.obj";

const defaultTimeout = browser.params.defaultTimeout;
const timeout = 1_000;

export class NewyorkerPage {
    
    newyorkerRepo: NewyorkerRepository;

    constructor() {
        this.newyorkerRepo = new NewyorkerRepository;
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
    
    public navigateToNewyorkerByURL() {
        browser.navigate().to(browser.params.newyorkerByURL);
    }

    public async searchByInput(name: string) {
        await browser.wait(ExpectedConditions.visibilityOf(this.newyorkerRepo.searchInput), timeout, "Fast Search not visible");
        await this.newyorkerRepo.searchInput.sendKeys(name);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
    }


    public async verifyItemIsVisible(name: string): promise.Promise<void> {

        //in very rare cases you should put elements in page object directly, not via object repository, like in this case:
        //we need to search for a specific element by name and easiest way is to search via xpath with expression contains()
        let searchedElement = element(by.xpath(`//div[@class='River__riverItemContent___2hXMG']/a/h4[contains(text(),'${name}')]`));
        // let searchedElement = element(by.xpath(`//div[@class='River__riverItemContent___2hXMG']/a/h4[contains(text(),'What Deadlines Do to Lifetimes')]`));

        //Asserting that element is visible
        await browser.wait(ExpectedConditions.visibilityOf(searchedElement), timeout, `"${name}" item not found in Search Results`);
    }

    public navigateToNewyorkerMain() {
        browser.navigate().to(browser.params.newyorkerMain);
    }

    public async headerLinkClick() {
        await this.newyorkerRepo.headerLink.click();
    }
    
    public async checkboxClick() {
        await this.newyorkerRepo.checkbox.click();
    }

    public async signUpFieldFill() {
        await this.newyorkerRepo.signUpField.sendKeys('test');
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
    }

    public async validationCheck() {
        expect(await this.newyorkerRepo.signUpField.getCssValue('color')).equal('rgba(170, 27, 25, 1)');
    }

}

