# iPay

> UI for iPay
The front page of the User Interface will contain four components where each have three own functions and
User Interfaces :
A) Login Management
• Opens the Login page with a Register Icon which redirects to register page
• Requires username, password and OTP if in Login page
• Upon successful login, redirected to the intended page (mostly Main page)
• Upon failure, redirect to page containing retry, forgot password or register
B) Profile Management
• Contains the Personal Information of the User like Name, Address, Date of Birth, etc.
• Compulsory Updation of KYC authentication which requires uploading clear copies of Aadhar Card, PAN
card and drivers license
C) Shopping Cart Management
a) Shows the Items available in the cart
• Select the Item for this purchase
• Edit the quantity of the product to be purchased (depends on availability of stock)
• Deleting the Item from the cart
b) When the Confirm button is clicked, a confirmation of order is shown
c) Upon confirming the products, payment options are displayed
• Wallet
• Savings Account
• Credit Card
d) If payment of wallet is chosen and the wallet does not of sufficient funds, partial billing with Credit/
Debit card will be allowed
D) Wallet Management
a) Shows the current balance available in the wallet and the source of the funds according to last
transaction
b) Transfer of funds into the wallet is available from
• Debit Card
• Credit Card
• Crypto Currencies 

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
