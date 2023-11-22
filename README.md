# Preshydemia
Preshydemia is an online recipe learning platform that contains over eight thousand recipes of several categories of dishes gotten from the spoonacular api. The app offers easy navigation creating flexibility for the users of the app. The home page provides a quick pictoral explanation of what the application offers as well as a "Get Started" button that navigates you to a /dishes route which displays a two divisions of dishes namely "Veggie Picks" and "Trending" in form of a slider, this page also allows you to filter the dishes returned by three main categories name "American", "Italian", and "Chinese", as well as a search feature that allows you to search for any meal you could possibly think of giving all possible results that contains the searched dish. Clicking on any dish from either the "Veggie Picks" and "Trending", the filtered dishes result or, the search result will take you to a new page that has the pictorial presentation of the dish to the left and two buttons to the right that gives the option of "instructions" and "ingredients" respectively.

## pages
The following route makes up the entire app:
- /
- /dishes
- /dishes/category
- /dishes/dish
- /dishes/searched
- /about
- /contact
- /login
- /register

### /
This is the home page and contains a brief pictorial explanation about the purpose of the application as well as a "Get Started" button that navigates users to the /dishes page.

### /dishes
This page displays a two divisions of dishes namely "Veggie Picks" and "Trending" in form of a slider, this page also allows you to filter the dishes returned by three main categories name "American", "Italian", and "Chinese", as well as a search feature that allows you to search for any meal you could possibly think of giving all possible results that contains the searched dish.

### /dishes/category
This page displays the result of the filtered dishes by accepting a search parameter called "category" from the url and filtering the result based on the value of the search parameter.

### /dishes/dish
This page displays the dish which was clicked. It accepts search paramater called "id" and get the particular dish based on that, it displays the image of the dish to the left of the page, as well as two buttons to display the instructions and ingredients of the recipe respectively.

### /dishes/searched
This page displays the result of the searched dish.

### /about
This gives a well detailed explanation about the spearheader and purpose of the application.

### /contact
This gives the users the ability to contact us by filling up the contact form.

### /login
This gives the users the ability to login to their account or register by clicking the register link if they do not have an account.

### /register
This creates a new account for a new user in the database.