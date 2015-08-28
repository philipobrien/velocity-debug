Feature: Allow masters to view a custom dashboard

  As a master
  I want to view a dashboard
  So that I can plan my masterful deeds

  Background:
    Given The master is signed in

  @dev
  Scenario: A master can view long term plans
    When The master navigates to "/dashboard"
    Then The master should see the heading Long Term Plans