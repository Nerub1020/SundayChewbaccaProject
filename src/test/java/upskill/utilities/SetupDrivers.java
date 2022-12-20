package upskill.utilities;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import io.github.bonigarcia.wdm.WebDriverManager;

public class SetupDrivers {
	
	public static WebDriver driver;
	
	public static void setupDriver(){
//	System.setProperty("webdriver.chrome.driver", 
								
		WebDriverManager.chromedriver().setup();
		ChromeOptions options = new ChromeOptions();
		options.addArguments("--start-maximized");
		options.addArguments("--disable-notifications");
		//options.addArguments("--headless");
		driver = new ChromeDriver(options);
		driver.get("https://www.ebay.com/");
		//driver.get("https://www.rahulshettyacademy.com/");
	}
	
	public static WebDriver getDriver(){
		return driver;
	}

	public static void tearDownDriver(){
		driver.close();
		driver.quit();
	}
}
