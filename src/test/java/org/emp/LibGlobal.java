package org.emp;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class LibGlobal {
	WebDriver driver;
	// Browser Initilzation

	public void getDriver(String browser) {
		if (browser.equalsIgnoreCase("chrome")) {
			System.setProperty("webdriver.chrome.driver", "");
			driver = new ChromeDriver();
			driver.manage().window().maximize();
		} else if (browser.equalsIgnoreCase("firefox")) {
			System.setProperty("webdriver.gecko.driver", "");
			driver = new FirefoxDriver();
			driver.manage().window().maximize();
		}
	}

	// Url
	public void getUrl(String url) {
		driver.get(url);
	}

	// passing text
	public void enterText(WebElement element, String data) {
		element.sendKeys(data);

	}

	// button click
	public void butnClick(WebElement element) {
		element.click();

	}

}
