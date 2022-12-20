package upskill.ebay.pageAction;

import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import upskill.ebay.pageElements.EbaySearchResultLocators;
import upskill.utilities.SetupDrivers;

public class EbaySearchResultActions {

	EbaySearchResultLocators EbaySearchResultLocatorsObj;
	
	public EbaySearchResultActions(){
		EbaySearchResultLocatorsObj = new EbaySearchResultLocators();
		PageFactory.initElements(SetupDrivers.driver, EbaySearchResultLocatorsObj);
		
	}
	public void filterBrand(String brand){
		if(brand.equals("Adidas")){
			
			EbaySearchResultLocatorsObj.cbxBrandAdidas.click();
	} else if (brand.equals("Nike")){
		EbaySearchResultLocatorsObj.cbxBrandNike.click();
	}else if (brand.equals("Unbranded")){
		EbaySearchResultLocatorsObj.cbxBrandUnbranded.click();
	}else {System.out.println("Brand not found , please implement !");
		
	}
		
	}
		public void filterCountry(String country){
			if(country.equals("China")){
				EbaySearchResultLocatorsObj.cbxCountryRegionOfManufacture.click();
				EbaySearchResultLocatorsObj.cbxCountryChina.click();
				
		} else if (country.equals("Bangladesh")){
			
			EbaySearchResultLocatorsObj.cbxCountryBangladesh.click();
			
		}else if (country.equals("United States")){
			
			EbaySearchResultLocatorsObj.cbxCountryUnitedStates.click();
			
		}else {System.out.println("Country not found , please implement !");
		
	}
		
		
	
		
		
		
		
	}
	public void verifyBrandItems(String brand){
		if (brand.equals("Adidas")){
		
		EbaySearchResultLocatorsObj.txtShirts.isDisplayed();
		
		}else if (brand.equals("Nike")) {
			
		EbaySearchResultLocatorsObj.txtShoes.isDisplayed();
		
		
		}else if (brand.equals("Unbranded")){
			
		EbaySearchResultLocatorsObj.txtPants.isDisplayed();
		}else {
			System.out.println("Brand not found , please implement !");
		}	
		}

	

public void verifyCountryBrandItems(String country){
	if (country.equals("Bangladesh")){
	
	EbaySearchResultLocatorsObj.txtShirts.isDisplayed();
	
	}else if (country.equals("China")) {
	EbaySearchResultLocatorsObj.cbxCountryRegionOfManufacture.isDisplayed();
	EbaySearchResultLocatorsObj.txtShoes.isDisplayed();

	
	}else if (country.equals("United States")){
		
	EbaySearchResultLocatorsObj.txtPants.isDisplayed();
	}else {
		System.out.println("Country not found , please implement !");
	}	
	}
	

	
	
	
	public void verifyShoesItems(){
		//Option 1
		Assert.assertEquals("Shoes", EbaySearchResultLocatorsObj.txtShoes.getText());
		
		//Option 2
		Assert.assertTrue(EbaySearchResultLocatorsObj.txtShoes.isDisplayed());
	}

	public void verifyShirtsItems() {
		//Option 1
		Assert.assertEquals("Shirts", EbaySearchResultLocatorsObj.txtShirts.getText());
		
		//Option 2
		Assert.assertTrue(EbaySearchResultLocatorsObj.txtShirts.isDisplayed());
		
	}
	
	public void verifyPantsItems() {
		//Option 1
		Assert.assertEquals("Pants", EbaySearchResultLocatorsObj.txtPants.getText());
		
		//Option 2
		Assert.assertTrue(EbaySearchResultLocatorsObj.txtPants.isDisplayed());
		
	}
	
	public void selectShirt() throws Exception{
		Thread.sleep(2000);
		EbaySearchResultLocatorsObj.linkShirtItems.click();
		Thread.sleep(2000);
		
	}
	
	}
	
