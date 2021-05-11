import { by, element, ElementFinder } from "protractor";

export class W3Repository {
    readonly checkboxById: ElementFinder = element(by.css('#vehicle1'));
    readonly radioById: ElementFinder = element(by.css('#female'));
}