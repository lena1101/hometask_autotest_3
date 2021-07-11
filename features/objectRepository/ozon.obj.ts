import { by, element, ElementFinder } from "protractor";

export class OzonRepository {
    
    readonly headerLink: ElementFinder = element(by.css('[href="https://www.ozon.ru/travel?perehod=ozon_menu_header"]'));
    readonly travelLogo: ElementFinder = element(by.css('[data-widget="travelLogo"]'));
    readonly searchField: ElementFinder = element(by.css('[name="travelSearchFrom"]')); 
    readonly cityList: ElementFinder = element(by.css('[data-popper-placement="bottom"]'));
    readonly cardLink: ElementFinder = element(by.linkText('Ozon Card'));
    // readonly cardRegistration: ElementFinder = element(by.buttonText('Оформить карту'));
    readonly cardRegistration: ElementFinder = element(by.css('.button.primary.size-l'));
    readonly title: ElementFinder = element(by.cssContainingText('div', 'Ozon.Card'));
    readonly registration: ElementFinder = element(by.css('[data-widget="ozonIdIframe"]'));
    readonly frame1: ElementFinder  = element(by.name('landingtop'));

    readonly catalogMenuButton: ElementFinder = element(by.css('[data-widget="catalogMenu"]'));
    readonly sportRestOption: ElementFinder = element(by.css('[href="/category/sport-i-otdyh-11000/"]'));
    readonly decatlonLogo: ElementFinder = element(by.css('[href="/brand/dekatlon-86001336/"]'));
    
}

