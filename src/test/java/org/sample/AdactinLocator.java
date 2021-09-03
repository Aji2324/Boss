package org.sample;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class AdactinLocator {
	WebDriver driver;

	@Given("user is on the Adactin page")
	public void user_is_on_the_Adactin_page() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.get("https://adactinhotelapp.com/");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(100, TimeUnit.SECONDS);

	}

	@When("user should enter {string}and{string}")
	public void user_should_enter_and(String UserName, String PassWord) {

		WebElement txtUser = driver.findElement(By.id("username"));
		txtUser.sendKeys(UserName);

		WebElement txtPass = driver.findElement(By.id("password"));
		txtPass.sendKeys(PassWord);

	}

	@When("user should click login button")
	public void user_should_click_login_button() {
		WebElement loginBtn = driver.findElement(By.id("login"));
		loginBtn.click();

	}

	@When("user should enter {string},{string},{string},{string},{string},{string},{string},{string}")
	public void user_should_enter(String Location, String Hotels, String RoomType, String NumberofRooms,
			String CheckInDate, String CheckOutDate, String AdultsperRoom, String ChildrenperRoom) {
		
		WebElement selectLoctn = driver.findElement(By.id("location"));
		selectLoctn.sendKeys(Location);
		

		WebElement hotelOption = driver.findElement(By.id("hotels"));
		hotelOption.sendKeys(Hotels);

		WebElement roomType = driver.findElement(By.xpath("//*[@id=\"room_type\"]"));
		roomType.sendKeys(RoomType);
		

		WebElement txtNo = driver.findElement(By.id("room_nos"));
		txtNo.sendKeys(NumberofRooms);

		WebElement dateIn = driver.findElement(By.id("datepick_in"));
		dateIn.sendKeys(CheckInDate);

		WebElement dateOut = driver.findElement(By.id("datepick_out"));
		dateOut.sendKeys(CheckOutDate);

		WebElement adultRoom = driver.findElement(By.id("adult_room"));
		adultRoom.sendKeys(AdultsperRoom);

		WebElement childRoom = driver.findElement(By.id("child_room"));
		childRoom.sendKeys(ChildrenperRoom);

	}
	
	@When("user should click search button")
	public void user_should_click_search_button() {
		WebElement submitBtn = driver.findElement(By.id("Submit"));
		submitBtn.submit();

	}
	
	@When("user should select radio button")
	public void user_should_select_radio_button() {
		WebElement radioBtn = driver.findElement(By.id("radiobutton_2"));
		radioBtn.click();

	}
	@When("user should continue button")
	public void user_should_continue_button() {
		WebElement cntBtn = driver.findElement(By.id("continue"));
		cntBtn.click();
		
	}
	
	@When("user should Enter{string},{string},{string},{string},{string},{string},{string},{string}")
	public void user_should_Enter(String FirstName, String LastName, String BillingAddress, String CreditCardNo, String CreditCardType, String ExpiryDate, String ExpiryYear, String CVVNumber) {
	
		WebElement firstName = driver.findElement(By.id("first_name"));
		firstName.sendKeys(FirstName);
		
		WebElement lastName = driver.findElement(By.id("last_name"));
		lastName.sendKeys(LastName);
		WebElement addressloct = driver.findElement(By.id("address"));
		addressloct.sendKeys(BillingAddress);
		WebElement creditCard = driver.findElement(By.id("cc_num"));
		creditCard.sendKeys(CreditCardNo );
		WebElement creditType = driver.findElement(By.id("cc_type"));
		creditType.sendKeys(CreditCardType);
		WebElement monthDate = driver.findElement(By.id("cc_exp_month"));
		monthDate.sendKeys(ExpiryDate);
		WebElement yearEx = driver.findElement(By.id("cc_exp_year"));
		yearEx.sendKeys(ExpiryYear);
		WebElement ccvTxt = driver.findElement(By.id("cc_cvv"));
		ccvTxt.sendKeys(CVVNumber);
	
	}

	@When("user should enter book now")
	public void user_should_enter_book_now() {
		WebElement bookNow = driver.findElement(By.id("book_now"));
		bookNow.click();
		
	}
	@When("user get the attribute value")
	public void user_get_the_attribute_value() {
		
		WebElement orderNo = driver.findElement(By.id("order_no"));
		String name = orderNo.getAttribute("value");
		System.out.println(name);
	}


	

	@Then("user should verify success msg")
	public void user_should_verify_success_msg() {
	}
	
	



}
