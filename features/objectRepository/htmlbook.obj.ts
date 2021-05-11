import { by, element, ElementFinder } from "protractor";

export class HtmlbookRepository {
    readonly select2: ElementFinder = element(by.name('select2'));
}