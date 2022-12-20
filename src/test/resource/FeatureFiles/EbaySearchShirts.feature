@regression @smoke @SKYW-19 @E2E
Feature: Ebay Search Functionality

	Scenario: Search for Shirts
		Given Open Ebay Homepage
		When Search for Shirts
		Then Item list should have only Shirts related items

		