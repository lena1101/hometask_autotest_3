import { browser, by, element, ElementFinder, ExpectedConditions, Key } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { DemoqaPage } from "../pageObjects/demoqa.page";
import { OzonPage } from "../pageObjects/ozon.page";
import { AmazonPage } from "../pageObjects/amazon.page";
import { NewyorkerPage } from "../pageObjects/newyorker.page";
import { MozillaPage } from "../pageObjects/dev-mozilla.page";

const defaultTimeout = browser.params.defaultTimeout;

export = function exampleSteps() {

    const demoqaPage = new DemoqaPage;
    const ozonPage = new OzonPage;
    const amazonPage = new AmazonPage;
    const newyorkerPage = new NewyorkerPage;
    const mozillaPage = new MozillaPage;

    //Default cucumber timeout
    this.setDefaultTimeout(600 * 1000);

    //Loading browser hacks
    let browserHacks = new BrowserHacks;

    //Hooks
    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        //ACTIONS AFTER EXECUTING EACH TEST, I.E. CLEANUP
        await browserHacks.ClearBrowserData();
    });

       
    this.Given(/^I am on demoqa-select page$/, async () => {
        await demoqaPage.navigateToDemoqaSelect();
    });

    this.When(/^I click on select$/, async () => {
        await demoqaPage.selectClick();
    });

    this.Then(/^Option must be selected$/, async () => {
        await demoqaPage.selectCheck();
    });

    this.Given(/^I am on demoqa-checkbox page$/, async () => {
        await demoqaPage.navigateToDemoqaCheckbox();
    });

    this.When(/^I click on expand button$/, async () => {
        await demoqaPage.buttonClick();
    });

    this.Then(/^The list must be expanded$/, async () => {
        await demoqaPage.listCheck();
    });

    this.When(/^I click on Note checkbox$/, async () => {
        await demoqaPage.clickCheckboxNotes();
    });

    this.Given(/^I am on demoqa-radiobutton page$/, async () => {
        await demoqaPage.navigateToDemoqaRadiobutton();
    });

    this.When(/^I click on radiobutton$/, async () => {
        await demoqaPage.radioButtonClick();
    });

    this.When(/^The value should be -Yes-$/, async () => {
        await demoqaPage.checkValue();
    });

    this.Given(/^I am on demoqa-button page$/, async () => {
        await demoqaPage.navigateToDemoqaButton();
    });

    this.When(/^I click on button 2 times$/, async () => {
        await demoqaPage.buttonDoubleclick();
    });

    this.When(/^The button double-clicked$/, async () => {
        await demoqaPage.clickCheck();
    });


    this.Given(/^I am on demoqa-webtables page$/, async () => {
        await demoqaPage.navigateTodemoqaModal();
    });

    this.When(/^I click on Add button$/, async () => {
        await demoqaPage.addButtonClick();
    });

    this.When(/^The Registration Form is opened$/, async () => {
        await demoqaPage.modalFormOpened();
    });

    this.When(/^I click on Close button$/, async () => {
        await demoqaPage.closeButtonClick();
    });

    this.When(/^The Registration Form is closed$/, async () => {
        await demoqaPage.modalFormClosed();
    });


    this.When(/^I enter TEST to firstName field$/, async () => {
        await demoqaPage.fieldFilling1();
    });

    this.When(/^I click on Submit button$/, async () => {
        await demoqaPage.submitButtonClick();
    });


    this.When(/^I enter TEST to lastName field$/, async () => {
        await demoqaPage.fieldFilling2();
    });
    this.When(/^I enter email to userEmail field$/, async () => {
        await demoqaPage.fieldFilling3();
    });
    this.When(/^I enter 30 to age field$/, async () => {
        await demoqaPage.fieldFilling4();
    });
    this.When(/^I enter 10000 to salary field$/, async () => {
        await demoqaPage.fieldFilling5();
    });
    this.When(/^I enter TEST to department field$/, async () => {
        await demoqaPage.fieldFilling6();
    });


    this.Given(/^I am on demoqa-frames page$/, async () => {
        await demoqaPage.navigateToDemoqaIframes();
    });

    this.When(/^I switch to Iframe$/, async () => {
        await demoqaPage.iframeSwitchTo();
    });

    this.When(/^I see the title - This is a sample page$/, async () => {
        await demoqaPage.titleCheck();
    });



    this.Given(/^I am on Ozon page$/, async () => {
        await ozonPage.navigateToOzonByURL();
    });

    this.When(/^I click on Ozone Travel button$/, async () => {
        await ozonPage.headerLinkClick();
    });

    this.When(/^I see Ozone Travel logo$/, async () => {
        await ozonPage.checkValue();
    });

    this.When(/^I click on search -from where- field$/, async () => {
        await ozonPage.searchFieldClick();
    });

    this.When(/^The list of cities is opened$/, async () => {
        await ozonPage.checkList();
    });

    // this.When(/^I click on Ozon Card button$/, async () => {
    //     ozonPage.cardLinkClick();
    // });

    // this.When(/^I see the registration button$/, async () => {
    //     ozonPage.checkCardButton();
    // });

    // this.When(/^I click on card registration button$/, async () => {
    //     ozonPage.cardRegistrationClick();
    // });

    // this.When(/^The modal of registration is opened$/, async () => {
    //     ozonPage.checkRegistrationModal();
    // });


       this.When(/^I click on Catalog Menu button$/, async () => {
        await ozonPage.catalogMenuButtonClick();
    });

    this.When(/^I navigate to Sport-i-otdyh option$/, async () => {
        await ozonPage.sportRestOption();
    });

    this.When(/^I see Decatlon logo$/, async () => {
        await ozonPage.decatlonLogo();
    });



    this.Given(/^I am on Amazon page$/, async () => {
        await amazonPage.navigateToAmazonByURL();
    });

    this.When(/^I click on Amazon Business Card link$/, async () => {
        await amazonPage.footerLinkClick();
    });

    this.When(/^I see Apply now button$/, async () => {
        await amazonPage.checkValue();
    });

    this.When(/^I click on Apply now button$/, async () => {
        await amazonPage.applyNowButtonClick();
    });
    this.When(/^The page with registration form is opened$/, async () => {
        await amazonPage.checkSignInForm();
    });


    this.When(/^I enter Camera & Photo in search-bar-form$/, async () => {
        await amazonPage.fastSearchSendKeys();
    });

    this.When(/^I push on Enter button$/, async () => {
        await amazonPage.pressEnter();
    });


    this.When(/^I click on dropdown Sort by button$/, async () => {
        await amazonPage.dropDownButtonClick();
    });
    this.When(/^I see Price: Low to High option in the DDL$/, async () => {
        await amazonPage.lowToHighOption();
    });

    this.Given(/^I am on Newyorker page$/, async () => {
        await newyorkerPage.navigateToNewyorkerByURL();
    });

    this.When(/^enter "(.*?)" in Search field$/, async (input: string) => {
        await newyorkerPage.searchByInput(input);
     });

    this.When(/^I see "(.*?)" article$/, async (value: string) => {
        await newyorkerPage.verifyItemIsVisible(value);
    });



    this.Given(/^I am on Newyorker main page$/, async () => {
        await newyorkerPage.navigateToNewyorkerMain();
    });

    this.When(/^I click on Newsletter link$/, async () => {
        await newyorkerPage.headerLinkClick();
    });

    this.When(/^I click on The Daily checkbox$/, async () => {
        await newyorkerPage.checkboxClick();
    });

    this.When(/^I enter test word to Your e-mail address field$/, async () => {
        await newyorkerPage.signUpFieldFill();
    });
    this.When(/^I see wrong validation status$/, async () => {
        await newyorkerPage.validationCheck();
    });



    this.Given(/^I am on developer-mozilla page$/, async () => {
        await mozillaPage.navigateToMozillaSelect();
    });

    this.When(/^I click on Change your language DDL$/, async () => {
        await mozillaPage.selectClick();
    });

    this.When(/^I select Polski option$/, async () => {
        await mozillaPage.selectCheck();
    });
    this.When(/^I click on Change language button$/, async () => {
        await mozillaPage.buttonClick();
    });
    this.When(/^I see Polish title$/, async () => {
        await mozillaPage.titleCheck();
    });

    this.When(/^I click on View in English button$/, async () => {
        await mozillaPage.changeButton();
    });
    this.When(/^I see English title$/, async () => {
        await mozillaPage.title2Check();
    });


}
