package stepdefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;

public class AttitudeTest {
	
	@When("I meet ([^\"]*)")
	public void Imeet(String str) {
		
		if (str.equals("watchmen"))
		{
			//insert Selenium code here
			System.out.println("watchmen code");
		}
		
		if (str.equals("NewspaperBoy"))
		{
			//insert Selenium code here 
			System.out.println("NewspaperBoy code");
		}
	}

	// the reg expression used below stands for any name/ any number
	@Given("I work in ([^\\\"]*)")
	public void ln(String str)
	{
		if (str.equals("Latenights"))
		{
			System.out.println("late night automation");
		}
		
		if (str.equals("Mornings"))
		{
			System.out.println("mornings automation");
		}
	}
	
	@Then("I ([^\"]*) him")
	public void gre(String str)
	{
		if (str.equals("Greeted"))
		{
			//insert Selenium code here
			System.out.println("Greeted automation");
		}
		
		if (str.equals("skipGreeting"))
		{
			//insert Selenium code here
			System.out.println("skipGreeting automation");
		}
	}
	
}
