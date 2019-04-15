package com.ult;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SampleTest {
	public WebDriver driver;
	@Given("The user should be in ultimatix home page")
	public void the_user_should_be_in_ultimatix_home_page() {
	System.setProperty("webdriver.chrome.driver", "C:\\Users\\moham\\eclipse-workspace\\CUCUMBER\\FaceBookTest\\lib\\chromedriver.exe");
	driver = new ChromeDriver();
	driver.get("https://www.ultimatix.net");
	driver.manage().window().maximize();
	}

	@When("The user should enter the details{string} and {string}")
	public void the_user_should_enter_the_details_and(String user, String pass) {
	driver.findElement(By.xpath("//input[@type='text']")).sendKeys(user);
	driver.findElement(By.xpath("//input[@type='PASSWORD']")).sendKeys(pass);
	}

	@Then("The browser should be closed")
	public void the_browser_should_be_closed() {
	    
	}


}
