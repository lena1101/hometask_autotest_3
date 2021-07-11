import { by, element, ElementFinder } from "protractor";

export class MozillaRepository {
    
    readonly clickDDL: ElementFinder = element(by.css('#language-selector'));
    readonly optionSelect: ElementFinder = element(by.cssContainingText('option', 'Polski'));
    readonly button: ElementFinder = element(by.css('.button.minimal'));
    readonly titleH1: ElementFinder = element(by.css('h1'));
    readonly changeButton: ElementFinder = element(by.css('.view-in-english'));
    
    
}

