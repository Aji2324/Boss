Feature: Verifying adactin hotel details

  Scenario Outline: Verifying adactin hotel with valid credentials
    Given user is on the Adactin page
    When user should enter "<UserName>"and"<PassWord>"
    And user should click login button
    And user should enter "<Location>","<Hotels>","<RoomType >","<NumberofRooms>","<CheckInDate>","<CheckOutDate>","<AdultsperRoom>","<ChildrenperRoom>"
    And user should click search button
    And user should select radio button
    And user should continue button
    When user should Enter"<FirstName>","<LastName>","<BillingAddress>","<CreditCardNo>","<CreditCardType>","<ExpiryDate>","<ExpiryYear>","<CVVNumber>"
    And user should enter book now
    And user get the attribute value
    Then user should verify success msg

    Examples: 
      | UserName  | PassWord | Location | Hotels         | RoomType | NumberofRooms | CheckInDate | CheckOutDate | AdultsperRoom | ChildrenperRoom | FirstName  | LastName | BillingAddress              | CreditCardNo       | CreditCardType   | ExpiryDate | ExpiryYear | CVVNumber |
      | AjithBike | Aji@2324 | London   | Hotel Sunshine | Double   | 1-One         | 18.08.2021  | 20.08.2021   | 1-One         | 1-One           | Ajithkumar | D        | Tirukoilur,Kallakurichi(dt) | 445895453566546322 | American Express | May        |       2021 |       698 |
      