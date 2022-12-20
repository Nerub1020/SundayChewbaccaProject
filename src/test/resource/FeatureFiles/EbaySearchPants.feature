@regression @smoke @SKYW-10 @E2E
Feature: Ebay Search Functionality

	Scenario: Search for Pants
		Given Open Ebay Homepage
		When Search for Pants
		Then Item list should have only Pants related items

