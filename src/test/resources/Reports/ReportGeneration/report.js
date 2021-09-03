$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feature/Login.feature");
formatter.feature({
  "name": "Verifying facebook details",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verifying facbook login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the Adactin page",
  "keyword": "Given "
});
formatter.step({
  "name": "user should enter \"\u003cUserName\u003e\"and\"\u003cPassWord\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should click login button",
  "keyword": "And "
});
formatter.step({
  "name": "user should enter \"\u003cLocation\u003e\",\"\u003cHotels\u003e\",\"\u003cRoomType \u003e\",\"\u003cNumberofRooms\u003e\",\"\u003cCheckInDate\u003e\",\"\u003cCheckOutDate\u003e\",\"\u003cAdultsperRoom\u003e\",\"\u003cChildrenperRoom\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user should click search button",
  "keyword": "And "
});
formatter.step({
  "name": "user should select radio button",
  "keyword": "And "
});
formatter.step({
  "name": "user should continue button",
  "keyword": "And "
});
formatter.step({
  "name": "user should Enter\"\u003cFirstName\u003e\",\"\u003cLastName\u003e\",\"\u003cBillingAddress\u003e\",\"\u003cCreditCardNo\u003e\",\"\u003cCreditCardType\u003e\",\"\u003cExpiryDate\u003e\",\"\u003cExpiryYear\u003e\",\"\u003cCVVNumber\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should enter book now",
  "keyword": "And "
});
formatter.step({
  "name": "user get the attribute value",
  "keyword": "And "
});
formatter.step({
  "name": "user should verify success msg",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "PassWord",
        "Location",
        "Hotels",
        "RoomType",
        "NumberofRooms",
        "CheckInDate",
        "CheckOutDate",
        "AdultsperRoom",
        "ChildrenperRoom",
        "FirstName",
        "LastName",
        "BillingAddress",
        "CreditCardNo",
        "CreditCardType",
        "ExpiryDate",
        "ExpiryYear",
        "CVVNumber"
      ]
    },
    {
      "cells": [
        "AjithBike",
        "Aji@2324",
        "London",
        "Hotel Sunshine",
        "Double",
        "1-One",
        "18.08.2021",
        "20.08.2021",
        "1-One",
        "1-One",
        "Ajithkumar",
        "D",
        "Tirukoilur,Kallakurichi(dt)",
        "445895453566546322",
        "American Express",
        "May",
        "2021",
        "698"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verifying facbook login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the Adactin page",
  "keyword": "Given "
});
formatter.match({
  "location": "AdactinLocator.user_is_on_the_Adactin_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d92.0.4515.159)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-8QH6GMLU\u0027, ip: \u0027192.168.1.60\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_301\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 92.0.4515.159, chrome: {chromedriverVersion: 92.0.4515.107 (87a818b10553..., userDataDir: C:\\Users\\Ajith\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62344}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 7714558adb2ec4211213105f4370557f\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\r\n\tat org.sample.AdactinLocator.user_is_on_the_Adactin_page(AdactinLocator.java:24)\r\n\tat ✽.user is on the Adactin page(src/test/resources/feature/Login.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user should enter \"AjithBike\"and\"Aji@2324\"",
  "keyword": "When "
});
formatter.match({
  "location": "AdactinLocator.user_should_enter_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should click login button",
  "keyword": "And "
});
formatter.match({
  "location": "AdactinLocator.user_should_click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should enter \"London\",\"Hotel Sunshine\",\"\u003cRoomType \u003e\",\"1-One\",\"18.08.2021\",\"20.08.2021\",\"1-One\",\"1-One\"",
  "keyword": "And "
});
formatter.match({
  "location": "AdactinLocator.user_should_enter(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should click search button",
  "keyword": "And "
});
formatter.match({
  "location": "AdactinLocator.user_should_click_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should select radio button",
  "keyword": "And "
});
formatter.match({
  "location": "AdactinLocator.user_should_select_radio_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should continue button",
  "keyword": "And "
});
formatter.match({
  "location": "AdactinLocator.user_should_continue_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should Enter\"Ajithkumar\",\"D\",\"Tirukoilur,Kallakurichi(dt)\",\"445895453566546322\",\"American Express\",\"May\",\"2021\",\"698\"",
  "keyword": "When "
});
formatter.match({
  "location": "AdactinLocator.user_should_Enter(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should enter book now",
  "keyword": "And "
});
formatter.match({
  "location": "AdactinLocator.user_should_enter_book_now()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user get the attribute value",
  "keyword": "And "
});
formatter.match({
  "location": "AdactinLocator.user_get_the_attribute_value()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should verify success msg",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinLocator.user_should_verify_success_msg()"
});
formatter.result({
  "status": "skipped"
});
});