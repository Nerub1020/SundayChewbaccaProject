    package upskill.ebay.stepDef;

    import cucumber.api.java.en.Given;
    import cucumber.api.java.en.Then;
    import cucumber.api.java.en.When;
    import upskill.ebay.pageAction.EbayHomepageActions;

    public class EbayHomepageSteps {
	
	EbayHomepageActions EbayHomepageActionsObj = new EbayHomepageActions();
	
	@Given("^Open Ebay Homepage$")
	public void open_Ebay_Homepage() throws Throwable {
		EbayHomepageActionsObj.loadHomepage();
	}
	@When("^Search for Shoes$")
	public void search_for_Shoes() throws Throwable {
		EbayHomepageActionsObj.searchShoes();
	}

     @When("^Search for Shirts$")
    public void search_for_Shirts() throws Throwable {
	EbayHomepageActionsObj.searchShirts();
    }
    
    @When("^Search for Pants$")
    public void search_for_Pants() throws Throwable {
	EbayHomepageActionsObj.searchPants();
    }
    
    @Given("^Search for \"([^\"]*)\"$")
	public void search_for(String items) throws Throwable {
    EbayHomepageActionsObj.searchItems(items);
    }
    
    @Given("^Search for Big Tall Cotton Tee$")
    public void search_for_Big_Tall_Cotton_Tee() throws Throwable {
    	Thread.sleep(2000);
     EbayHomepageActionsObj.searchItems("Big & Tall Cotton Tee.Sizes 4 XLT to 8XLT.");
    }
    
	@When("^Mouse Hover to MyEbay Summary$")
	public void mouse_Hover_to_MyEbay_Summary() throws Throwable {
		EbayHomepageActionsObj.mouseHoverEbay();
	}

	@Then("^Click on Summary$")
	public void click_on_Summary() throws Throwable {
		EbayHomepageActionsObj.clickSummary();
	}
	
	
	}


   
    
    
   
   
  
   