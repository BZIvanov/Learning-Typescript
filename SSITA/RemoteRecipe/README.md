# Recipe Book application
This is a small java script project about cooking recipes.

## Process for downloading and installing the application

1. Download the repository.
2. In termianl run the command <code>npm install</code> to install all the dependencies.
If done correctly you should have node_modules folder in the root directory
3. With Visual Studio Code open the index.html with the extension Live Server. In case you don't have it go to Extensions Marketplace and install it.

## Functionality provided by the application.

### User functionality

Users areprovided with:

1. Authentication rights:
- able to register new account
- able to login with already registered account
- able to logout

2. Recipes related rights:
- able to review all the recipes when logged in in the application
- able to create new recipes
- able to edit only recipes which the current logged user owns
- able to delete only recipes which the current logged user owns
- able to like any recipes in the application

Application specifics:
- when reviewing all the recipes, recipes owned by the user are colored in dark blue and recipes owned by other user are colored in dark grey
- when reviewing specific recipe user is able to click the ingredients which will color in green when clicked, meaning the ingredient is added if the user is actually cooking the recipe
On another click the ingredient will become again grey which works as toggle
- notifications are displayed on actions such as login, register, logout, likes, recipes added and so on
- the button Random recipe should always pull random recipe from the database and display it to the user
- there should be a greeting text showing the current loged user's username
