 @smoke 
Feature: Example feature    

    Example Feature for testing purposes and for education

    Scenario: hover
    Given I am on Onliner page
    When I move the cursor to autoflea market hyperlink
    Then I see the list of cities

    Scenario: checkbox
    Given I am on w3school page
    When I click on checkbox
    Then Checkbox must be checked
    
    Scenario: radio
    Given I am on w3school page
    When I click on radio
    Then Radio must be checked
         
    Scenario: DDL
    Given I am on w3docs page
    When I click on select
    Then Option must be selected

