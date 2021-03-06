package demo;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class Demo1 {
	
	public static void main(String[] args) {
		
		//set Chrome Options
		ChromeOptions options = new ChromeOptions();
		options.addArguments("--no-sandbox");
		
		/*
		 * adding more Chrome options:
		 * https://stackoverflow.com/questions/50749488/webdriver-and-chrome-devtoolsactiveport-file-doesnt-exist
		 */
		
		
		//create driver object
		//strictly implement methods of webdriver
		//set Property does key, value pairs
		System.setProperty("webdriver.chrome.driver", "/root/Desktop/chromedriver");
		WebDriver driver = new ChromeDriver(options);
		driver.get("http://google.com");
		System.out.println(driver.getTitle());
			
	}

}
