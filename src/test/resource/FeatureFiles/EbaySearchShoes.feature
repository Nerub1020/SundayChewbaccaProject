@regression @smoke @SKYW-15 @E
Feature: Ebay Search Functionality

	Scenario: Search for Shoes
		Given Open Ebay Homepage
		When Search for Shoes
		Then Item list should have only Shoes related 

		