package MyRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "D:\\Swamyshiva\\swamyshiva\\CucumberBDD\\src\\main\\java\\Features\\login.feature",
		glue = {"stepDefinitions"},
		format = {"pretty", "html:test-output", "json:json-output/cucumber.json", "junit:junit-xml/junit.xml"},
		monochrome = true,
		strict = true,
		dryRun = false
		)

public class TestRunner {

}
