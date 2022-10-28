Feature: Register vehicle
    As a user, I want to access the Tricentis website
    To apply for vehicle insurance

    Background: 
        Given I access the Tricentis website
        And I want to register my vehicle

    Scenario: Register vehicle
        When I fill in the "Enter Vehicle Data" form
        And I fill in the "Enter Insurant Data" form
        And I fill in the "Enter Product Data" form
        And I fill in the "Select Price Option" form
        And I fill in the "Send Quote" form
        Then I can see a successfull message 

