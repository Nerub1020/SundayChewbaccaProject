package upskill.ebay.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class EbaySearchResultLocators {

	    //Validate Shoes Items
		@FindBy(xpath="//span[2][contains(text(),'Shoes')]")
		public WebElement txtShoes;

		//Checkbox Shirts
		@FindBy(xpath="//span[2][contains(text(),'Shirts')]")
        public WebElement txtShirts;
		
		//Checkbox Pants
	    @FindBy(xpath="//span[2][contains(text(),'Pants')]")
        public WebElement txtPants;
	
		//Checkbox Brand Adidas
		@FindBy(xpath="//input[@aria-label='adidas']")
		public WebElement cbxBrandAdidas;

		//Checkbox Brand Nike
		@FindBy(xpath="//input[@aria-label='Nike']")
		public WebElement cbxBrandNike;

		//Checkbox Brand Unbranded
		@FindBy(xpath="//input[@aria-label='Unbranded']")
		public WebElement cbxBrandUnbranded;
		
		//Checkbox Country China
		@FindBy(xpath="//input[@aria-label='China']")
		public WebElement cbxCountryChina;
		
		//Checkbox Country Bangladesh
        @FindBy(xpath="//input[@aria-label='Bangladesh']")
		public WebElement cbxCountryBangladesh;
		
		//Checkbox Country United States
		@FindBy(xpath="//input[@aria-label='United States']")
		public WebElement cbxCountryUnitedStates;

		//Checkbox Country Region
		@FindBy(xpath="//*[contains(text(),'Country/Region of Manufacture')]")
		public WebElement cbxCountryRegionOfManufacture;
		
		
		//Shirt link
		@FindBy(xpath="//*[contains(text(),'Big & Tall Cotton Tee. Sizes 4 XLT to 8XLT. With')]")
		public WebElement linkShirtItems;
		
		
		
	}


