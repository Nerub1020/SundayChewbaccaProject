package upskill.ebay.pageAction;

import java.util.NoSuchElementException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.WebDriverWait;

import upskill.ebay.pageElements.EbayHomepageLocators;
import upskill.utilities.ReadExcelSheet;
import upskill.utilities.SetupDrivers;

public class EbayHomepageActions {
	
	EbayHomepageLocators EbayHomepageLocatorsObj;
	
	public EbayHomepageActions(){
		EbayHomepageLocatorsObj = new EbayHomepageLocators();
		PageFactory.initElements(SetupDrivers.driver, EbayHomepageLocatorsObj);
	}
	
	public void loadHomepage(){
		// Selenium Wait : 1. Implicit wait(Global), 2. Explicit wait(Conditional), 3. Fluent wait(intermittent)
		
		SetupDrivers.driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);				//Implicit Wait
		
		WebDriverWait wait = new WebDriverWait(SetupDrivers.driver, 10);
		
		wait.until(ExpectedConditions.elementToBeClickable(EbayHomepageLocatorsObj.txtbxSearch));	//Explicit wait
		
		 FluentWait fluentWait = new FluentWait(SetupDrivers.driver);								//Fluent Wait
					fluentWait.withTimeout(20, TimeUnit.SECONDS);
		 fluentWait.pollingEvery(5, TimeUnit.SECONDS);
			 	    fluentWait.ignoring(NoSuchElementException.class);
		            fluentWait.withMessage("Fluent Wait Time exceeded");
	}
	
	public void searchShoes(){
		EbayHomepageLocatorsObj.txtbxSearch.sendKeys("Shoes");
		//EbayHomepageLocatorsObj.txtbxSearch.sendKeys(ReadExcelSheet.getMapData("search"));
		//EbayHomepageLocatorsObj.btnSearch.click();
		EbayHomepageLocatorsObj.btnSearch.sendKeys(Keys.ENTER);
	}
	
	public void searchShirts(){
		EbayHomepageLocatorsObj.txtbxSearch.sendKeys("Shirts");
		EbayHomepageLocatorsObj.btnSearch.click();
	}
	
	public void searchPants(){
		EbayHomepageLocatorsObj.txtbxSearch.sendKeys("Pants");
		EbayHomepageLocatorsObj.btnSearch.click();
	}

	public void searchNike(){
		EbayHomepageLocatorsObj.txtbxSearch.sendKeys("Nike");
		EbayHomepageLocatorsObj.btnSearch.click();
		
}
	public void searchAdidas(){
		EbayHomepageLocatorsObj.txtbxSearch.sendKeys("Adidas");
		EbayHomepageLocatorsObj.btnSearch.click();

}
	public void searchItems(String items){
		EbayHomepageLocatorsObj.txtbxSearch.sendKeys(items);
		EbayHomepageLocatorsObj.btnSearch.click();
}
	public void searchUnbranded(){
		EbayHomepageLocatorsObj.txtbxSearch.sendKeys("Unbranded");
		EbayHomepageLocatorsObj.btnSearch.click();
	
}
	public void searchChina(){
		EbayHomepageLocatorsObj.txtbxSearch.sendKeys("China");
		EbayHomepageLocatorsObj.btnSearch.click();
}
	public void searchBangladesh(){
		EbayHomepageLocatorsObj.txtbxSearch.sendKeys("Bangladesh");
		EbayHomepageLocatorsObj.btnSearch.click();
}
	public void searchUnitedStates(){
		EbayHomepageLocatorsObj.txtbxSearch.sendKeys("United States");
		EbayHomepageLocatorsObj.btnSearch.click();
}
	public void mouseHoverEbay() throws Exception{
    Actions actions =new Actions (SetupDrivers.driver);
    actions.moveToElement(EbayHomepageLocatorsObj.linkMyEbay);
    actions.perform();
    Thread.sleep(2000);
	
	}
		public void keyboardkeys() {
		EbayHomepageLocatorsObj.btnSearch.sendKeys(Keys.ENTER);	
		EbayHomepageLocatorsObj.btnSearch.sendKeys(Keys.UP);
        EbayHomepageLocatorsObj.btnSearch.sendKeys(Keys.DOWN);
        EbayHomepageLocatorsObj.btnSearch.sendKeys(Keys.CLEAR);
        EbayHomepageLocatorsObj.btnSearch.sendKeys(Keys.DELETE);
	}
	public void handleAlert(){
		SetupDrivers.driver.switchTo().alert().accept();
		SetupDrivers.driver.switchTo().alert().dismiss();
		SetupDrivers.driver.switchTo().alert().sendKeys("Good Feedback");
		SetupDrivers.driver.switchTo().alert().getText();
	}
	
	public void javaScriptExecutor(){
		JavascriptExecutor js = (JavascriptExecutor)SetupDrivers.driver;	//Creating JS object
		
		js.executeScript("");
		
		js.executeScript("EbaySearchResultLocatorsObj.cbxBrandNike.click();"); //Clicking on element
		
		js.executeScript("EbayHomePageLocatorsObj.txtbxSearch.value ='shirt';"); //Writing something
		
		js.executeScript("EbaySearchResultLocatorsObj.cbxBrandNike.checked=true;"); //Interact Check box
		
		js.executeScript("window.location = 'http://upskill.com';"); // initializing location
		
		js.executeScript("location.reload()"); 						//Refresh browser
		
		js.executeScript("alert('Confirmation');");					//Alert
		
		js.executeScript("window.scrollBy(0,500)", ""); 			//Scroll down to specific pixel
		
		js.executeScript("window.scrollBy(0,-500)", ""); 			//Scroll up to specific pixel
		
		js.executeScript("arguments[0].scrollIntoView();", EbayHomepageLocatorsObj.btnSearch);  //Scroll to a object
		
		js.executeScript("window.scrollBy(0,document.body.scrollHeight)"); //Scroll down to bottom of web site
	}

	public void clickSummary()throws Exception {
		EbayHomepageLocatorsObj.linkSummary.isEnabled();
		EbayHomepageLocatorsObj.linkSummary.click();
		Thread.sleep(2000);
	}
	
	}
	
	
   


