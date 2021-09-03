package org.sample;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions (snippets= SnippetType.UNDERSCORE,strict=true,features="src\\test\\resources",glue= {"org.sample"},monochrome =true,dryRun=false,
plugin= {"pretty","html:C:\\Users\\Ajith\\eclipse-workspace\\CucumberFramework\\src\\test\\resources\\Reports\\ReportGeneration",
		"json:C:\\Users\\Ajith\\eclipse-workspace\\CucumberFramework\\src\\test\\resources\\Reports\\adactin.json",
		"junit:C:\\Users\\Ajith\\eclipse-workspace\\CucumberFramework\\src\\test\\resources\\Reports\\adactin.xml"})



public class AdactinHotel {
	private void sysout() {
int a=10;
	}
	
}
