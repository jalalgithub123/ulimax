package com.ult;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\Users\\moham\\eclipse-workspace\\CUCUMBER\\UltiTest\\src\\test\\resources\\Feature\\ulti.feature",glue= {"com.ult"},plugin= {"json:target/cucumber.json","html:target/cucumber-html-report"})
public class TestRunner {

}
