Feature: Register vehicle
    As a user, I want to access the Tricentis website
    To register my vehicle

    Background: 
        Given I access the Tricentis website
        And I want to register my vehicle

    Scenario Outline: Register vehicle
        When I fill in the '<name>' form
        And I click on the Next button
        And I fill in the Send Quote form
        And I click on the Send button
        Then I can see a successfull message 
    Examples:
        | name                |
        | Enter Vehicle Data  |
        | Enter Insurant Data |
        | Enter Product Data  | 
        | Select Price Option |
