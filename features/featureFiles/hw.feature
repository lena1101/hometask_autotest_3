 @smoke 
Feature: Example feature    

    Example Feature for testing purposes and for education

    # Scenario: hover
    # Given I am on Onliner page
    # When I move the cursor to autoflea market hyperlink
    # Then I see the list of cities

    # Scenario: checkbox
    # Given I am on w3school page
    # When I click on checkbox
    # Then Checkbox must be checked
    
    # Scenario: radio
    # Given I am on w3school page
    # When I click on radio
    # Then Radio must be checked
         
    # Scenario: DDL
    # Given I am on demoqa-select page
    # When I click on select
    # Then Option must be selected

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
    
    Scenario: HeaderLink
    Given I am on Ozon page
    When I click on Ozone Travel button
    Then I see Ozone Travel logo
    
