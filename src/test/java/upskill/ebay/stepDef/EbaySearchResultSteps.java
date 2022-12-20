    package upskill.ebay.stepDef;

    import cucumber.api.java.en.Then;
    import cucumber.api.java.en.When;
    import upskill.ebay.pageAction.EbaySearchResultActions;

    public class EbaySearchResultSteps {
	
	EbaySearchResultActions EbaySearchResultActionsObj = new EbaySearchResultActions();

	@Then("^Item list should have only Shoes related$")
	public void item_list_should_have_only_Shoes_related_items() throws Throwable {
		EbaySearchResultActionsObj.verifyShoesItems();
		
	}
	
   @Then("^Item list should have only Shirts related items$")
	public void item_list_should_have_only_Shirts_related_items() throws Throwable {
		EbaySearchResultActionsObj.verifyShirtsItems();
		
	}


    @Then("^Item list should have only Pants related items$")
    public void item_list_should_have_only_Pants_related_items() throws Throwable {
    	EbaySearchResultActionsObj.verifyPantsItems();
    }
  

     @Then("^Item list should have products of \"([^\"]*)\"$")
     public void item_list_should_have_products_of(String brand) throws Throwable {
    	EbaySearchResultActionsObj.verifyBrandItems(brand);
    }
     @When("^Filter by \"([^\"]*)\"$")
     public void filter_by(String brand ) throws Throwable {
 	    EbaySearchResultActionsObj.filterBrand(brand);
    } 
 	   
    @When("^Region of Manufacture by \"([^\"]*)\"$")
     public void region_of_Manufacture_by(String Country) throws Throwable {
    	 EbaySearchResultActionsObj.filterCountry(Country);
    }

     @Then("^Item list should be from \"([^\"]*)\"$")
     public void item_list_should_be_from(String Country) throws Throwable {
    	 EbaySearchResultActionsObj.filterCountry(Country);
     }
     @When("^Select the first shirt on item list$")
     public void select_the_first_shirt_on_item_list() throws Throwable {
        EbaySearchResultActionsObj.selectShirt(); 
    }

    }