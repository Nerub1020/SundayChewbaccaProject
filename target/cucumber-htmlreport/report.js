$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("EbayBrandOutline.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay Brand Outline",
  "description": "\nDescription: User should able to filter items by Brand",
  "id": "ebay-brand-outline",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@us-246"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Filter items by Brand",
  "description": "",
  "id": "ebay-brand-outline;filter-items-by-brand",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "Search for \"\u003cItems\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Filter by \"\u003cBrand\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Item list should have products of \"\u003cBrand\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "ebay-brand-outline;filter-items-by-brand;",
  "rows": [
    {
      "cells": [
        "Items",
        "Brand"
      ],
      "line": 15,
      "id": "ebay-brand-outline;filter-items-by-brand;;1"
    },
    {
      "cells": [
        "Shoes",
        "Nike"
      ],
      "line": 16,
      "id": "ebay-brand-outline;filter-items-by-brand;;2"
    },
    {
      "cells": [
        "Shirts",
        "Adidas"
      ],
      "line": 17,
      "id": "ebay-brand-outline;filter-items-by-brand;;3"
    },
    {
      "cells": [
        "Pants",
        "Unbranded"
      ],
      "line": 18,
      "id": "ebay-brand-outline;filter-items-by-brand;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10174529208,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "EbayHomepageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 143979375,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Filter items by Brand",
  "description": "",
  "id": "ebay-brand-outline;filter-items-by-brand;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@us-246"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Search for \"Shoes\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Filter by \"Nike\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Item list should have products of \"Nike\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Shoes",
      "offset": 12
    }
  ],
  "location": "EbayHomepageSteps.search_for(String)"
});
formatter.result({
  "duration": 22007714917,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nike",
      "offset": 11
    }
  ],
  "location": "EbaySearchResultSteps.filter_by(String)"
});
formatter.result({
  "duration": 4217758083,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nike",
      "offset": 35
    }
  ],
  "location": "EbaySearchResultSteps.item_list_should_have_products_of(String)"
});
formatter.result({
  "duration": 194647625,
  "status": "passed"
});
formatter.after({
  "duration": 174565458,
  "status": "passed"
});
formatter.before({
  "duration": 7782462000,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "EbayHomepageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 7630834,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Filter items by Brand",
  "description": "",
  "id": "ebay-brand-outline;filter-items-by-brand;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@us-246"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Search for \"Shirts\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Filter by \"Adidas\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Item list should have products of \"Adidas\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Shirts",
      "offset": 12
    }
  ],
  "location": "EbayHomepageSteps.search_for(String)"
});
formatter.result({
  "duration": 25316585583,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adidas",
      "offset": 11
    }
  ],
  "location": "EbaySearchResultSteps.filter_by(String)"
});
formatter.result({
  "duration": 4673799250,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adidas",
      "offset": 35
    }
  ],
  "location": "EbaySearchResultSteps.item_list_should_have_products_of(String)"
});
formatter.result({
  "duration": 1124943958,
  "status": "passed"
});
formatter.after({
  "duration": 252273333,
  "status": "passed"
});
formatter.before({
  "duration": 8474237750,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "EbayHomepageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 11647209,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Filter items by Brand",
  "description": "",
  "id": "ebay-brand-outline;filter-items-by-brand;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@us-246"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Search for \"Pants\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Filter by \"Unbranded\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Item list should have products of \"Unbranded\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Pants",
      "offset": 12
    }
  ],
  "location": "EbayHomepageSteps.search_for(String)"
});
formatter.result({
  "duration": 31120773250,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Unbranded",
      "offset": 11
    }
  ],
  "location": "EbaySearchResultSteps.filter_by(String)"
});
formatter.result({
  "duration": 4288330000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Unbranded",
      "offset": 35
    }
  ],
  "location": "EbaySearchResultSteps.item_list_should_have_products_of(String)"
});
formatter.result({
  "duration": 188050292,
  "status": "passed"
});
formatter.after({
  "duration": 266453625,
  "status": "passed"
});
formatter.uri("EbayCartDropDown.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay Cart Functionality",
  "description": "\nDescription: User should able to add items in cart",
  "id": "ebay-cart-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@us-248"
    }
  ]
});
formatter.before({
  "duration": 8348104000,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "EbayHomepageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 16301583,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Ebay cart functionality",
  "description": "",
  "id": "ebay-cart-functionality;ebay-cart-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "Search for Shirt",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Select the first Shirt on item list",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Select Size",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Select Men Size",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Select Shade",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Select Quantity",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Add to shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayHomepageSteps.search_for_Shirt()"
});
formatter.result({
  "duration": 31242381750,
  "status": "passed"
});
formatter.match({
  "location": "EbaySearchResultSteps.select_the_first_Shirt_on_item_list()"
});
formatter.result({
  "duration": 4473003042,
  "status": "passed"
});
formatter.match({
  "location": "EbayCartSteps.select_Size()"
});
formatter.result({
  "duration": 22132474083,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//select[@name\u003d\u0027Size Type\u0027]\"}\n  (Session info: chrome\u003d107.0.5304.110)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027mds-MacBook-Pro.lan\u0027, ip: \u00272603:7000:e300:e694:0:0:0:125b%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002713.0.1\u0027, java.version: \u00271.8.0_341\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.110, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/01/z0yb3s817d5...}, goog:chromeOptions: {debuggerAddress: localhost:60649}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 20329ec9beb9081da3c4633bcbaeffc1\n*** Element info: {Using\u003dxpath, value\u003d//select[@name\u003d\u0027Size Type\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:419)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.getTagName(Unknown Source)\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:44)\n\tat upskill.ebay.pageAction.EbayCartActions.selectSizeTypeDD(EbayCartActions.java:26)\n\tat upskill.ebay.stepDef.EbayCartSteps.select_Size(EbayCartSteps.java:14)\n\tat ✽.And Select Size(EbayCartDropDown.feature:12)\n",
  "status": "failed"
});
formatter.match({
  "location": "EbayCartSteps.select_Men_Size()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EbayCartSteps.select_Shade()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EbayCartSteps.select_Quantity()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EbayCartSteps.add_to_shopping_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1005166333,
  "status": "passed"
});
formatter.uri("EbayCountryOutline.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay Country Outline",
  "description": "\nDescription: User should able to filter items by Country",
  "id": "ebay-country-outline",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@us-247"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Filter items by Country",
  "description": "",
  "id": "ebay-country-outline;filter-items-by-country",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "Search for \"\u003cItems\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Region of Manufacture by \"\u003cCountry\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Item list should be from \"\u003cCountry\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "ebay-country-outline;filter-items-by-country;",
  "rows": [
    {
      "cells": [
        "Items",
        "Country"
      ],
      "line": 16,
      "id": "ebay-country-outline;filter-items-by-country;;1"
    },
    {
      "cells": [
        "Shoes",
        "China"
      ],
      "line": 17,
      "id": "ebay-country-outline;filter-items-by-country;;2"
    },
    {
      "cells": [
        "Shirts",
        "Bangladesh"
      ],
      "line": 18,
      "id": "ebay-country-outline;filter-items-by-country;;3"
    },
    {
      "cells": [
        "Pants",
        "United States"
      ],
      "line": 19,
      "id": "ebay-country-outline;filter-items-by-country;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9108968875,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "EbayHomepageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 17839916,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Filter items by Country",
  "description": "",
  "id": "ebay-country-outline;filter-items-by-country;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@us-247"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Search for \"Shoes\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Region of Manufacture by \"China\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Item list should be from \"China\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Shoes",
      "offset": 12
    }
  ],
  "location": "EbayHomepageSteps.search_for(String)"
});
formatter.result({
  "duration": 34151943333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "China",
      "offset": 26
    }
  ],
  "location": "EbaySearchResultSteps.region_of_Manufacture_by(String)"
});
formatter.result({
  "duration": 10885241375,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "China",
      "offset": 26
    }
  ],
  "location": "EbaySearchResultSteps.item_list_should_be_from(String)"
});
formatter.result({
  "duration": 21630082167,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d107.0.5304.110)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027mds-MacBook-Pro.lan\u0027, ip: \u00272603:7000:e300:e694:0:0:0:125b%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002713.0.1\u0027, java.version: \u00271.8.0_341\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.110, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/01/z0yb3s817d5...}, goog:chromeOptions: {debuggerAddress: localhost:60744}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 0d8342920a13b94f0dd689bb22c1e1e8\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\n\tat upskill.ebay.pageAction.EbaySearchResultActions.filterCountry(EbaySearchResultActions.java:34)\n\tat upskill.ebay.stepDef.EbaySearchResultSteps.item_list_should_be_from(EbaySearchResultSteps.java:50)\n\tat ✽.Then Item list should be from \"China\"(EbayCountryOutline.feature:12)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 1205746833,
  "status": "passed"
});
formatter.before({
  "duration": 7924122875,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "EbayHomepageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 17765416,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Filter items by Country",
  "description": "",
  "id": "ebay-country-outline;filter-items-by-country;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@us-247"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Search for \"Shirts\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Region of Manufacture by \"Bangladesh\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Item list should be from \"Bangladesh\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Shirts",
      "offset": 12
    }
  ],
  "location": "EbayHomepageSteps.search_for(String)"
});
formatter.result({
  "duration": 35898028500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bangladesh",
      "offset": 26
    }
  ],
  "location": "EbaySearchResultSteps.region_of_Manufacture_by(String)"
});
formatter.result({
  "duration": 3746049667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bangladesh",
      "offset": 26
    }
  ],
  "location": "EbaySearchResultSteps.item_list_should_be_from(String)"
});
formatter.result({
  "duration": 6369774125,
  "status": "passed"
});
formatter.after({
  "duration": 284681417,
  "status": "passed"
});
formatter.before({
  "duration": 7467906167,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "EbayHomepageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 5685917,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Filter items by Country",
  "description": "",
  "id": "ebay-country-outline;filter-items-by-country;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@us-247"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Search for \"Pants\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Region of Manufacture by \"United States\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Item list should be from \"United States\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Pants",
      "offset": 12
    }
  ],
  "location": "EbayHomepageSteps.search_for(String)"
});
formatter.result({
  "duration": 35307389750,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United States",
      "offset": 26
    }
  ],
  "location": "EbaySearchResultSteps.region_of_Manufacture_by(String)"
});
formatter.result({
  "duration": 2762533666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United States",
      "offset": 26
    }
  ],
  "location": "EbaySearchResultSteps.item_list_should_be_from(String)"
});
formatter.result({
  "duration": 7130044583,
  "status": "passed"
});
formatter.after({
  "duration": 293169417,
  "status": "passed"
});
formatter.uri("EbaySearchLaptops.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay Search Functionality",
  "description": "",
  "id": "ebay-search-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@SKYW-14"
    },
    {
      "line": 1,
      "name": "@E2E"
    }
  ]
});
formatter.before({
  "duration": 8259036375,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Search for Laptops",
  "description": "",
  "id": "ebay-search-functionality;search-for-laptops",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Search for Laptops",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Item list should have only Laptops related items",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayHomepageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 9989959,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomepageSteps.search_for_Laptops()"
});
formatter.result({
  "duration": 37467244167,
  "status": "passed"
});
formatter.match({
  "location": "EbaySearchResultSteps.item_list_should_have_only_Laptops_related_items()"
});
formatter.result({
  "duration": 1667396583,
  "status": "passed"
});
formatter.after({
  "duration": 632250917,
  "status": "passed"
});
formatter.uri("EbaySearchPants.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay Search Functionality",
  "description": "",
  "id": "ebay-search-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@SKYW-10"
    },
    {
      "line": 1,
      "name": "@E2E"
    }
  ]
});
formatter.before({
  "duration": 8452024000,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Search for Pants",
  "description": "",
  "id": "ebay-search-functionality;search-for-pants",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Search for Pants",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Item list should have only Pants related items",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayHomepageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 6285625,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomepageSteps.search_for_Pants()"
});
formatter.result({
  "duration": 35662153042,
  "status": "passed"
});
formatter.match({
  "location": "EbaySearchResultSteps.item_list_should_have_only_Pants_related_items()"
});
formatter.result({
  "duration": 2488621625,
  "status": "passed"
});
formatter.after({
  "duration": 270588500,
  "status": "passed"
});
formatter.uri("EbaySearchShirts.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay Search Functionality",
  "description": "",
  "id": "ebay-search-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@SKYW-19"
    },
    {
      "line": 1,
      "name": "@E2E"
    }
  ]
});
formatter.before({
  "duration": 7687115875,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Search for Shirts",
  "description": "",
  "id": "ebay-search-functionality;search-for-shirts",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Search for Shirts",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Item list should have only Shirts related items",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayHomepageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 11665500,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomepageSteps.search_for_Shirts()"
});
formatter.result({
  "duration": 37802953459,
  "status": "passed"
});
formatter.match({
  "location": "EbaySearchResultSteps.item_list_should_have_only_Shirts_related_items()"
});
formatter.result({
  "duration": 1907823042,
  "status": "passed"
});
formatter.after({
  "duration": 248656792,
  "status": "passed"
});
formatter.uri("EbaySearchShoes.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay Search Functionality",
  "description": "",
  "id": "ebay-search-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@SKYW-15"
    },
    {
      "line": 1,
      "name": "@E"
    }
  ]
});
formatter.before({
  "duration": 7655723209,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Search for Shoes",
  "description": "",
  "id": "ebay-search-functionality;search-for-shoes",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Search for Shoes",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Item list should have only Shoes related",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayHomepageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 12268291,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomepageSteps.search_for_Shoes()"
});
formatter.result({
  "duration": 35246844250,
  "status": "passed"
});
formatter.match({
  "location": "EbaySearchResultSteps.item_list_should_have_only_Shoes_related_items()"
});
formatter.result({
  "duration": 1527925208,
  "status": "passed"
});
formatter.after({
  "duration": 235257625,
  "status": "passed"
});
formatter.uri("EbaySummaryMouseHover.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay Summary Mousehover",
  "description": "",
  "id": "ebay-summary-mousehover",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 7547352250,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Ebay Summary Mousehover",
  "description": "",
  "id": "ebay-summary-mousehover;ebay-summary-mousehover",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Mouse Hover to MyEbay Summary",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click on Summary",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayHomepageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 5998292,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomepageSteps.mouse_Hover_to_MyEbay_Summary()"
});
formatter.result({
  "duration": 8763327666,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomepageSteps.click_on_Summary()"
});
formatter.result({
  "duration": 37624162083,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d107.0.5304.110)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027mds-MacBook-Pro.lan\u0027, ip: \u00272603:7000:e300:e694:0:0:0:125b%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002713.0.1\u0027, java.version: \u00271.8.0_341\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.110, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/01/z0yb3s817d5...}, goog:chromeOptions: {debuggerAddress: localhost:61484}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 559e71d0fe51fe503fbf319ab3c2e52a\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\n\tat sun.reflect.GeneratedMethodAccessor10.invoke(Unknown Source)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\n\tat upskill.ebay.pageAction.EbayHomepageActions.clickSummary(EbayHomepageActions.java:143)\n\tat upskill.ebay.stepDef.EbayHomepageSteps.click_on_Summary(EbayHomepageSteps.java:52)\n\tat ✽.Then Click on Summary(EbaySummaryMouseHover.feature:7)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 2275567042,
  "status": "passed"
});
formatter.uri("Shettyiframe.feature");
formatter.feature({
  "line": 2,
  "name": "Rahul Shetty iframe practice",
  "description": "",
  "id": "rahul-shetty-iframe-practice",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@SKYW-20"
    },
    {
      "line": 1,
      "name": "@E2E"
    }
  ]
});
formatter.before({
  "duration": 7166746583,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Iframe Practice",
  "description": "",
  "id": "rahul-shetty-iframe-practice;iframe-practice",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open Shetty Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Click on iFrame Home",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "It should reload iframe homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "ShettyHomepageSteps.open_Shetty_Homepage()"
});
formatter.result({
  "duration": 8869446166,
  "status": "passed"
});
formatter.match({
  "location": "ShettyHomepageSteps.click_on_iFrame_Home()"
});
formatter.result({
  "duration": 180833,
  "status": "passed"
});
formatter.match({
  "location": "ShettyHomepageSteps.it_should_reload_iframe_homepage()"
});
formatter.result({
  "duration": 7042,
  "status": "passed"
});
formatter.after({
  "duration": 146613792,
  "status": "passed"
});
});