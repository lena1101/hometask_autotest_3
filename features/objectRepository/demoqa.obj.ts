import { by, element, ElementFinder } from "protractor";

export class DemoqaRepository {
    readonly oldSelect: ElementFinder = element(by.css('#oldSelectMenu'));
    readonly expandButton: ElementFinder = element(by.css('.rct-option-expand-all'));
    readonly list: ElementFinder = element(by.css('.rct-node-parent'));
    readonly checkboxDesktop: ElementFinder = element(by.css('#tree-node-desktop')); 
    readonly checkboxNotes: ElementFinder = element(by.css('.rct-checkbox'));
    readonly radiobutton: ElementFinder = element(by.css('#yesRadio'));
    readonly radiobuttonLabel: ElementFinder = element(by.css('.custom-control-label'));
    readonly value: ElementFinder = element(by.css('.text-success')); 
    readonly button: ElementFinder = element(by.css('#doubleClickBtn'));
    readonly clickedButton: ElementFinder = element(by.css('#doubleClickMessage'));
    
    readonly addButton: ElementFinder = element(by.css('#addNewRecordButton'));
    readonly modal: ElementFinder = element(by.css('.modal-content'));
    readonly closeButton: ElementFinder = element(by.css('.close'));
    readonly fieldFilling1: ElementFinder = element(by.css('#firstName'));
    readonly submitButton: ElementFinder = element(by.css('#submit'));

    readonly fieldFilling2: ElementFinder = element(by.css('#lastName'));
    readonly fieldFilling3: ElementFinder = element(by.css('#userEmail'));
    readonly fieldFilling4: ElementFinder = element(by.css('#age'));
    readonly fieldFilling5: ElementFinder = element(by.css('#salary'));
    readonly fieldFilling6: ElementFinder = element(by.css('#department'));

    readonly iframe: ElementFinder = element(by.css('#frame1'));
    readonly title: ElementFinder = element(by.css('#sampleHeading'));
}

