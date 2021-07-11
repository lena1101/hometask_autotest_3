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
        demoqaPage.navigateToDemoqaSelect();
    });

    this.When(/^I click on select$/, async () => {
        demoqaPage.selectClick();
    });

    this.Then(/^Option must be selected$/, async () => {
        demoqaPage.selectCheck();
    });

    this.Given(/^I am on demoqa-checkbox page$/, async () => {
        demoqaPage.navigateToDemoqaCheckbox();
    });

    this.When(/^I click on expand button$/, async () => {
        demoqaPage.buttonClick();
    });

    this.Then(/^The list must be expanded$/, async () => {
        demoqaPage.listCheck();
    });

    this.When(/^I click on Note checkbox$/, async () => {
        demoqaPage.clickCheckboxNotes();
    });

    this.Given(/^I am on demoqa-radiobutton page$/, async () => {
        demoqaPage.navigateToDemoqaRadiobutton();
    });

    this.When(/^I click on radiobutton$/, async () => {
        demoqaPage.radioButtonClick();
    });

    this.When(/^The value should be -Yes-$/, async () => {
        demoqaPage.checkValue();
    });

    this.Given(/^I am on demoqa-button page$/, async () => {
        demoqaPage.navigateToDemoqaButton();
    });

    this.When(/^I click on button 2 times$/, async () => {
        demoqaPage.buttonDoubleclick();
    });

    this.When(/^The button double-clicked$/, async () => {
        demoqaPage.clickCheck();
    });


    this.Given(/^I am on demoqa-webtables page$/, async () => {
        demoqaPage.navigateTodemoqaModal();
    });

    this.When(/^I click on Add button$/, async () => {
        demoqaPage.addButtonClick();
    });

    this.When(/^The Registration Form is opened$/, async () => {
        demoqaPage.modalFormOpened();
    });

    this.When(/^I click on Close button$/, async () => {
        demoqaPage.closeButtonClick();
    });

    this.When(/^The Registration Form is closed$/, async () => {
        demoqaPage.modalFormClosed();
    });


    this.When(/^I enter TEST to firstName field$/, async () => {
        demoqaPage.fieldFilling1();
    });

    this.When(/^I click on Submit button$/, async () => {
        demoqaPage.submitButtonClick();
    });


    this.When(/^I enter TEST to lastName field$/, async () => {
        demoqaPage.fieldFilling2();
    });
    this.When(/^I enter email to userEmail field$/, async () => {
        demoqaPage.fieldFilling3();
    });
    this.When(/^I enter 30 to age field$/, async () => {
        demoqaPage.fieldFilling4();
    });
    this.When(/^I enter 10000 to salary field$/, async () => {
        demoqaPage.fieldFilling5();
    });
    this.When(/^I enter TEST to department field$/, async () => {
        demoqaPage.fieldFilling6();
    });


    this.Given(/^I am on demoqa-frames page$/, async () => {
        demoqaPage.navigateToDemoqaIframes();
    });

    this.When(/^I switch to Iframe$/, async () => {
        demoqaPage.iframeSwitchTo();
    });

    this.When(/^I see the title - This is a sample page$/, async () => {
        demoqaPage.titleCheck();
    });



    this.Given(/^I am on Ozon page$/, async () => {
        ozonPage.navigateToOzonByURL();
    });

    this.When(/^I click on Ozone Travel button$/, async () => {
        ozonPage.headerLinkClick();
    });

    this.When(/^I see Ozone Travel logo$/, async () => {
        ozonPage.checkValue();
    });

    this.When(/^I click on search -from where- field$/, async () => {
        ozonPage.searchFieldClick();
    });

    this.When(/^The list of cities is opened$/, async () => {
        ozonPage.checkList();
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
        ozonPage.catalogMenuButtonClick();
    });

    this.When(/^I navigate to Sport-i-otdyh option$/, async () => {
        ozonPage.sportRestOption();
    });

    this.When(/^I see Decatlon logo$/, async () => {
        ozonPage.decatlonLogo();
    });



    this.Given(/^I am on Amazon page$/, async () => {
        amazonPage.navigateToAmazonByURL();
    });

    this.When(/^I click on Amazon Business Card link$/, async () => {
        amazonPage.footerLinkClick();
    });

    this.When(/^I see Apply now button$/, async () => {
        amazonPage.checkValue();
    });

    this.When(/^I click on Apply now button$/, async () => {
        amazonPage.applyNowButtonClick();
    });
    this.When(/^The page with registration form is opened$/, async () => {
        amazonPage.checkSignInForm();
    });


    this.When(/^I enter Camera & Photo in search-bar-form$/, async () => {
        amazonPage.fastSearchSendKeys();
    });

    this.When(/^I push on Enter button$/, async () => {
        amazonPage.pressEnter();
    });


    this.When(/^I click on dropdown Sort by button$/, async () => {
        amazonPage.dropDownButtonClick();
    });
    this.When(/^I see Price: Low to High option in the DDL$/, async () => {
        amazonPage.lowToHighOption();
    });

    this.Given(/^I am on Newyorker page$/, async () => {
        newyorkerPage.navigateToNewyorkerByURL();
    });

    this.When(/^enter "(.*?)" in Search field$/, async (input: string) => {
        await newyorkerPage.searchByInput(input);
     });

    this.When(/^I see "(.*?)" article$/, async (value: string) => {
        await newyorkerPage.verifyItemIsVisible(value);
    });



    this.Given(/^I am on Newyorker main page$/, async () => {
        newyorkerPage.navigateToNewyorkerMain();
    });

    this.When(/^I click on Newsletter link$/, async () => {
        newyorkerPage.headerLinkClick();
    });

    this.When(/^I click on The Daily checkbox$/, async () => {
        newyorkerPage.checkboxClick();
    });

    this.When(/^I enter test word to Your e-mail address field$/, async () => {
        newyorkerPage.signUpFieldFill();
    });
    this.When(/^I see wrong validation status$/, async () => {
        newyorkerPage.validationCheck();
    });



    this.Given(/^I am on developer-mozilla page$/, async () => {
        mozillaPage.navigateToMozillaSelect();
    });

    this.When(/^I click on Change your language DDL$/, async () => {
        mozillaPage.selectClick();
    });

    this.When(/^I select Polski option$/, async () => {
        mozillaPage.selectCheck();
    });
    this.When(/^I click on Change language button$/, async () => {
        mozillaPage.buttonClick();
    });
    this.When(/^I see Polish title$/, async () => {
        mozillaPage.titleCheck();
    });

    this.When(/^I click on View in English button$/, async () => {
        mozillaPage.changeButton();
    });
    this.When(/^I see English title$/, async () => {
        mozillaPage.title2Check();
    });




}
