import { by, element, ElementFinder } from "protractor";

export class NewyorkerRepository {
    
    readonly searchInput: ElementFinder = element(by.css('[placeholder="Enter search terms"]'));
    readonly headerLink: ElementFinder = element(by.linkText('Newsletter'));
    readonly checkbox: ElementFinder = element(by.css('#manage-discovery-selection-control-newsletter-list-217-0'));
    readonly signUpField: ElementFinder = element(by.css('#manage-text-field-email'));
}

