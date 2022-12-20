package upskill.ebay.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class EbayHomepageLocators {
	
	   //Selenium Page Factory
	
	   //Search Text Box
	   @FindBy(xpath="//input[@placeholder='Search for anything']")
	   public WebElement txtbxSearch;
	
	
	    //Search Button
		@FindBy(xpath="//input[@id='gh-btn']")
		public WebElement btnSearch;
		
		// Click Summary
		@FindBy(xpath="//*[contains(text(),'Summary')]")
		public WebElement linkSummary;
		
		// MouseHover MyEbay
		@FindBy(xpath="//a[@title='My eBay']")
		public WebElement linkMyEbay;
				
      }
