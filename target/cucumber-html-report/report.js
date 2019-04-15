$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/moham/eclipse-workspace/CUCUMBER/UltiTest/src/test/resources/Feature/ulti.feature");
formatter.feature({
  "name": "Want to validate ultimatix home page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Want to validate ultimatix home page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The user should be in ultimatix home page",
  "keyword": "Given "
});
formatter.step({
  "name": "The user should enter the details\"\u003cuser\u003e\" and \"\u003cpass\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The browser should be closed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "user",
        "pass"
      ]
    },
    {
      "cells": [
        "test1",
        "12345678"
      ]
    },
    {
      "cells": [
        "test2",
        "ABCDEFG"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Want to validate ultimatix home page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The user should be in ultimatix home page",
  "keyword": "Given "
});
formatter.match({
  "location": "SampleTest.the_user_should_be_in_ultimatix_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should enter the details\"test1\" and \"12345678\"",
  "keyword": "When "
});
formatter.match({
  "location": "SampleTest.the_user_should_enter_the_details_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The browser should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "SampleTest.the_browser_should_be_closed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Want to validate ultimatix home page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The user should be in ultimatix home page",
  "keyword": "Given "
});
formatter.match({
  "location": "SampleTest.the_user_should_be_in_ultimatix_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should enter the details\"test2\" and \"ABCDEFG\"",
  "keyword": "When "
});
formatter.match({
  "location": "SampleTest.the_user_should_enter_the_details_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The browser should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "SampleTest.the_browser_should_be_closed()"
});
formatter.result({
  "status": "passed"
});
});