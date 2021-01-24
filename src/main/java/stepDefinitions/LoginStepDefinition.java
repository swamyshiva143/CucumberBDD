package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefinition {

	WebDriver driver;
	
	@Given("^user is already on login page$")
	public void user_is_already_on_login_page()  {
		System.setProperty("webdriver.chrome.driver","D:\\Swamyshiva\\swamyshiva\\chromedriver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://ui.freecrm.com/");
	    
	}

	@When("^title of login page is free CRM$")
	public void title_of_login_page_is_free_CRM() {
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Cogmento CRM", title);
	 
	}

	@Then("^user enters username and password$")
	public void user_enters_username_and_password() {
		driver.findElement(By.name("email")).sendKeys("swamyakula2@gmail.com");
		driver.findElement(By.name("password")).sendKeys("lavi123@@");
	
	}

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button() {
		WebElement loginBtn= driver.findElement(By.xpath("//div[@class='ui fluid large blue submit button' and contains(text(),'Login')]"));
		JavascriptExecutor js= (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click();", loginBtn);
	    
	}

	@Then("^user is on Homepage$")
	public void user_is_on_Homepage()  {
		String title = driver.getTitle();
		System.out.println("Homepage Title::"+title);
		Assert.assertEquals("Cogmento CRM", title);
	   
	}
	
	

		
	@Given("^user login to Homepage$")
	public void user_login_to_Homepage() {
//	 boolean name= driver.findElement(By.xpath("//div[@class='right menu']//span[text()='Swamyshiva  Akula']")).isDisplayed();
//	   Assert.assertTrue(true);
	}

	@When("^title of the homepage is Cogmento CRM$")
	public void title_of_the_homepage_is_Cogmento_CRM()  {
	  
	}

	@Then("^user click on the Contact Link$")
	public void user_click_on_the_Contact_Link()  {
	  
	}

	@Then("^user has to Quit from the page$")
	public void user_has_to_Quit_from_the_page()  {
	   
	}

	
}
