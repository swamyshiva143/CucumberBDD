Feature: Free CRM Login Feature

Scenario: Free CRM Login Test Scenario

Given user is already on login page
When title of login page is free CRM
Then user enters username and password
Then user clicks on login button
Then user is on Homepage


Scenario: Free CRM HomePage Test Scenario

Given user login to Homepage
When title of the homepage is Cogmento CRM
Then user click on the Contact Link
Then user has to Quit from the page
