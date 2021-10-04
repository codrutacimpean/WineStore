# WineStore
Front - End Exam Project
Implement a website (online store)
It must contain the following functionalities
1 - Login page
2 - Registration page
3 - Products page
4 - Product page with details + reviews
5 - Profile page, to be able to change the password, change the name
6 - To be able to log out of the application
The code must be written in English, the html can also be in Romanian.

Project structure
1 - pages contain all html
2 - script / models contain all classes
3 - script / services contains business logic for each model (replaces manager and store)
4 - style contains csss

Acceptance criteria
--Menu bar
As a user I can have a navigation bar with login, register when not logged in and, products, profiles, logout when logged in

--Registration page
As a user I can create a new profile
 - html page with 3 inputs and 1 button
 - onclick to take me to the login page
 - its logic exists in AuthenticationService

--Login page
As a user I can log in to the website after I have created my account
 - a page with 2 inputs and a button
 - onclick to take me to the products page
 - its logic exists in AuthenticationService

--Product page
As a user I can view all the products on the site
 - its page contains a list of products
 - to be able to add a new product
 - its logic exists in ProductService

--Profile page
As a user I have the opportunity to have a page where I can change my name, password and delete my profile
 - its page contains fields for the above and buttons for profile modification

--logout
As a user when I am logged in and I want to log on onclick to take me to the login page
