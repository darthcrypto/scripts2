package testcases;
import com.thoughtworks.selenium.*;

public class TC_001 {
	
	private selenium;
	
	@Before
	public void setUp() throws Exception {
		selenium = new DefaultSelenium("localhost", 4444, "*iexplore", "http://cnn.com")
		selenium.start();
	}
	
	@Test
	public void testUntitled() throws Exception {
		selenium.open("/");
		selenium.type("name-search", "Iphone");
		selenium.click("xpath=(//button[@type='button'])[4]");
		selenium.waitForPageToLoad("30000");
		selenium.click("css=div.button-group > button[type=\"button\"]");
		selenium.click("//div[@id='top-links']/ul/li[5]/a/span");
		selenium.waitForPageLoad("30000");
	}
	
	@After
	public void tearDown() throws Exception {
		selenium.stop();
	}
}
