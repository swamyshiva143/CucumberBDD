$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Swamyshiva/swamyshiva/CucumberBDD/src/main/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 11276382100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 29360200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_username_and_password()"
});
formatter.result({
  "duration": 620312100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 84733000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Homepage()"
});
formatter.result({
  "duration": 8184100,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Free CRM HomePage Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-homepage-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "user login to Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "title of the homepage is Cogmento CRM",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user click on the Contact Link",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user has to Quit from the page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_login_to_Homepage()"
});
formatter.result({
  "duration": 83800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_the_homepage_is_Cogmento_CRM()"
});
formatter.result({
  "duration": 397900,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinitions.LoginStepDefinition.title_of_the_homepage_is_Cogmento_CRM(LoginStepDefinition.java:68)\r\n\tat ✽.When title of the homepage is Cogmento CRM(D:/Swamyshiva/swamyshiva/CucumberBDD/src/main/java/Features/login.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_on_the_Contact_Link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_has_to_Quit_from_the_page()"
});
formatter.result({
  "status": "skipped"
});
});