import { by, element, ElementFinder } from "protractor";

export class OzonRepository {
    // readonly oldSelect: ElementFinder = element(by.css('#oldSelectMenu'));
    // readonly expandButton: ElementFinder = element(by.css('.rct-option-expand-all'));
    // readonly list: ElementFinder = element(by.css('.rct-node-parent'));
    // readonly checkboxDesktop: ElementFinder = element(by.css('#tree-node-desktop')); 
    // readonly checkboxNotes: ElementFinder = element(by.css('.rct-checkbox'));
    // readonly radiobutton: ElementFinder = element(by.css('#yesRadio'));
    // readonly radiobuttonLabel: ElementFinder = element(by.css('.custom-control-label'));
    // readonly value: ElementFinder = element(by.css('.text-success')); 
    // readonly button: ElementFinder = element(by.css('#doubleClickBtn'));
    // readonly clickedButton: ElementFinder = element(by.css('#doubleClickMessage'));
    readonly headerLink: ElementFinder = element(by.linkText('Ozon Travel'));
    readonly travelLogo: ElementFinder = element(by.css('[data-widget="travelLogo"]'));
}

