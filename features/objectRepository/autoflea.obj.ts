import { by, element, ElementFinder } from "protractor";

export class AutofleaRepository {
    readonly autofleaByClass: ElementFinder = element(by.cssContainingText('.b-main-navigation a span', 'Автобарахолка'));
    readonly hoverMenuByClass: ElementFinder = element(by.css('.b-main-navigation__dropdown_visible'));    
}