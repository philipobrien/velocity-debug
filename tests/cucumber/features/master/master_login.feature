Feature: Allow master users to login and logout

  As a master
  I want to login and logout
  So that I can do master stuff

  Background:
    Given The master is signed out

  @dev
  Scenario: A master can login with valid information
    Given The master is on the landing page
    When The master enters his details
    Then The master should be logged in

  @dev
  Scenario: A master cannot login with bad information
    Given The master is on the landing page
    When The master's details are incorrect
    Then The master should see a user not found error