Feature: Want to validate ultimatix home page

  Scenario Outline: Want to validate ultimatix home page
    Given The user should be in ultimatix home page
    When The user should enter the details"<user>" and "<pass>"
    Then The browser should be closed

    Examples: 
      | user  | pass     |
      | test1 | 12345678 |
      | test2 | ABCDEFG  |
