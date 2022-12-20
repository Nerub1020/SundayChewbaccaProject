package upskill.ebay.pageAction;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

import upskill.ebay.pageElements.ShettyHomepageLocators;
import upskill.utilities.SetupDrivers;
public class ShettyHomepageActions {
	ShettyHomepageLocators ShettyHomepageLocatorsObj;
	
	public ShettyHomepageActions(){
		 ShettyHomepageLocatorsObj = new ShettyHomepageLocators();
		PageFactory.initElements(SetupDrivers.driver, ShettyHomepageLocatorsObj);
	}
	public void loadShettyHomepage()throws Exception{
		SetupDrivers.driver.get("https://rahulshettyacademy.com/AutomationPractice/");
	    SetupDrivers.driver.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS);
		Thread.sleep(3000);
	}
    	public void clickOk() throws Exception {
	ShettyHomepageLocatorsObj.Alertbtn.click();
	SetupDrivers.driver.switchTo().alert().accept();
	Thread.sleep(5000);
		
	}
	public void clickCancel() throws Exception{
		ShettyHomepageLocatorsObj.Confirmbtn.click();
		SetupDrivers.driver.switchTo().alert().dismiss();
		Thread.sleep(5000);
	}
		public void clickHome(){
			
			List<WebElement> framelist = SetupDrivers.driver.findElements(By.id("courses-iframe"));
			
			for (int i=0; i<framelist.size(); i++){
				SetupDrivers.driver.switchTo().frame(i);
				
				try{
					ShettyHomepageLocatorsObj.btnHome.click();
				}catch(Exception e){
					System.out.println("Element not found in courses-iframe");
				}
			}
		}
		
		public void verifyShettyHome() throws Exception{
			Thread.sleep(5000);
			ShettyHomepageLocatorsObj.btnHome.isDisplayed(); 
		}
	
    public void handleIframe(){
	
	//i find i frame using i frame tag in DOM or HTML
	//i use switchTo().frame() to switch i frames
	
	//Switch i frame by Index
	SetupDrivers.driver.switchTo().frame(0);
	SetupDrivers.driver.switchTo().frame(1);
	
	//Switch i frame by Name or ID
	SetupDrivers.driver.switchTo().frame("iframe-name");
	SetupDrivers.driver.switchTo().frame("id");
	
	//Switch back to previous i frame
	SetupDrivers.driver.switchTo().defaultContent();
	SetupDrivers.driver.switchTo().parentFrame();
	SetupDrivers.driver.switchTo().frame("parent");
	
	//nested i frame
	SetupDrivers.driver.switchTo().frame("inner");
	SetupDrivers.driver.switchTo().frame("child");
}
}


	

