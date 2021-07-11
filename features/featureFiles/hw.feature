 @smoke 
Feature: Example feature    

    Example Feature for testing purposes and for education

           
    Scenario: DDL
    Given I am on demoqa-select page
    When I click on select
    Then Option must be selected

    Scenario: Checkbox
    Given I am on demoqa-checkbox page
    When I click on expand button
    Then The list must be expanded
    Then I click on Note checkbox

    Scenario: Radiobutton
    Given I am on demoqa-radiobutton page
    When I click on radiobutton
    Then The value should be -Yes-

    Scenario: Button
    Given I am on demoqa-button page
    When I click on button 2 times
    Then The button double-clicked

    Scenario: Opened Modal
    Given I am on demoqa-webtables page
    When I click on Add button 
    Then The Registration Form is opened

    Scenario: Iframe
    Given I am on demoqa-frames page
    When I switch to Iframe
    Then I see the title - This is a sample page

    Scenario: Closed Modal
    Given I am on demoqa-webtables page
    When I click on Add button 
    Then The Registration Form is opened
    Then I click on Close button
    Then The Registration Form is closed

    Scenario: Validation test1
    Given I am on demoqa-webtables page
    When I click on Add button 
    Then I enter TEST to firstName field
    Then I click on Submit button
    Then The Registration Form is opened


    Scenario: Validation test2
    Given I am on demoqa-webtables page
    When I click on Add button 
    Then I enter TEST to firstName field
    Then I enter TEST to lastName field
    Then I enter email to userEmail field
    Then I enter 30 to age field
    Then I enter 10000 to salary field
    Then I enter TEST to department field
    Then I click on Submit button
    Then The Registration Form is closed

         
    Scenario: HeaderLink
    Given I am on Ozon page
    When I click on Ozone Travel button
    Then I see Ozone Travel logo

    Scenario: Search Field
    Given I am on Ozon page
    When I click on Ozone Travel button
    When I click on search -from where- field
    Then The list of cities is opened
    
    Scenario: Decatlon logo
    Given I am on Ozon page
    When I click on Catalog Menu button
    Then I navigate to Sport-i-otdyh option
    Then I see Decatlon logo
    
    Scenario: Card Registration
    Given I am on Amazon page
    When I click on Amazon Business Card link
    Then I see Apply now button
    Then I click on Apply now button
    Then The page with registration form is opened

    Scenario: DDL Sorting
    Given I am on Amazon page
    When I enter Camera & Photo in search-bar-form
    Then I push on Enter button
    Then I click on dropdown Sort by button
    Then I see Price: Low to High option in the DDL

    Scenario Outline: Searching "<SearchValue>" in Header Fast Search results in "<ArticleName>"

        Given I am on Newyorker page
        When enter "<SearchValue>" in Search field
        Then I see "<ArticleName>" article

        Examples:
            | SearchValue  | ArticleName                         |
            | Deadlines    | What Deadlines Do to Lifetimes      |
            | Cockatoo     | Where Did That Cockatoo Come From?  |
            | New Zealand  | “The Coast of New Zealand”          |

    Scenario: Validation
    Given I am on Newyorker main page
    When I click on Newsletter link
    Then I click on The Daily checkbox
    Then I enter test word to Your e-mail address field
    Then I see wrong validation status

    Scenario: Select              
    Given I am on developer-mozilla page
    When I click on Change your language DDL
    Then I select Polski option
    Then I click on Change language button
    Then I see Polish title

    Scenario: Select              
    Given I am on developer-mozilla page
    When I click on Change your language DDL
    Then I select Polski option
    Then I click on Change language button
    Then I see Polish title
    Then I click on View in English button
    Then I see English title

