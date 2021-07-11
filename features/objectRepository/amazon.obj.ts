import { by, element, ElementFinder } from "protractor";

export class AmazonRepository {
    
    readonly footerLink: ElementFinder = element(by.linkText('Amazon Business Card'));
    readonly applyNowButton: ElementFinder = element(by.css('#applyBoxLink-announce'));
    readonly signInForm: ElementFinder = element(by.css('.a-spacing-small'));

    readonly fastSearch: ElementFinder = element(by.css('#twotabsearchtextbox'));
    readonly dropDownButton: ElementFinder = element(by.css('.a-dropdown-container'));
    readonly lowToHighOption: ElementFinder = element(by.css('#s-result-sort-select_2'));

}


