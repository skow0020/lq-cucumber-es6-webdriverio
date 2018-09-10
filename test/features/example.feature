Feature: Example Feature

  Scenario: Navigate to LQ contributor info
    Given I am on the home page
    When I navigate to the contributors page
    Then I can view the info of Joli

  Scenario: Navigate to Book Lists category
    Given I am on the home page
    Then I can navigate to the Book Lists category

  Scenario: Write For Us
    Given I am on the home page
    When I navigate to the write for us page
    Then I can submit my info
