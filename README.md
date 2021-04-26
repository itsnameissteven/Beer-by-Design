# Brew by Design

## Creator

[<img src="https://img.shields.io/badge/LinkedIn-steven--mancine-informational?style=for-the-badge&labelColor=black&logo=linkedin&logoColor=0077b5&&color=0FBBD6"/>][linkedin1]
[<img src="https://img.shields.io/badge/Github-itsnameissteven-informational?style=for-the-badge&labelColor=black&logo=github&color=8B0BD5"/>][github1]

## Deployed Site

[Rancid Tomatillos](https://rancid-tomatillos-max.herokuapp.com/)

## Table of Contents

- [About the Project](#about-the-project)
- [Project Goals](#project-goals)
- [Features](#features)
  - [Home Page](#home-page)
  - [Recipe Details](#recipe-details)
  - [Search](#search)
  - [Watch Trailer](#watch-trailer)
  - [Responsive Design](#responsive-design)
  - [Responsive Design](#responsive-design)
  - [Error Handling](#error-handling)
- [Future Considerations](#future-considerations)
- [Technologies Used](#technologies-used)

## About The Project

Home brewing is a passion of mine, over the years, I have struggled to find consistent resources for recipes. I stumbled across the [Punk API](https://punkapi.com/documentation/v2) which host a decent amount of recipes. Brew by design allows the end user to search for recipes and save them to comeback to at a later date.

## Project Goals

1. Implement modular code utilizing React
2. Use React Router to conditionally render components.
3. Use Cypress to test React components and asynchronous JS with > 90% coverage.
4. Allow for users to navigate via keyboard.
5. Implement responsive design for cross-screen compatibility.

## Features

### Home Page

On the landing page the user has access to a search bar, and handpicked 'featured' recipes. The user can run a search from here or select one of the featured recipes to view more information.

![home page](https://user-images.githubusercontent.com/72312636/116162356-d56cd100-a6b2-11eb-8c62-59e5e5d7e86b.gif)

### Recipe Details

This page features a detailed recipe, with access to an overview, ingredients, food pairings, and method for brewing.

![Screen Shot 2021-04-26 at 5 11 08 PM](https://user-images.githubusercontent.com/72312636/116162368-dbfb4880-a6b2-11eb-9571-59aea0b74c3b.png)

### Search

Users can search for a recipe using the search bar. After completing a search an overview of each recipe is displayed. Click on the recipe for to see the complete recipe.

<img width="1234" alt="Screen Shot 2021-04-26 at 5 02 26 PM" src="https://user-images.githubusercontent.com/72312636/116162357-d7369480-a6b2-11eb-88a0-9c9966f04354.png">

## Save Recipes
On the recipe page, users can save a recipe. Once saved a list is accessible from the 'saved recipe' page.

<img width="1437" alt="Screen Shot 2021-04-26 at 5 09 46 PM" src="https://user-images.githubusercontent.com/72312636/116162363-d998ee80-a6b2-11eb-867e-b4cada6b0564.png">

## Responsive Design

Responsive design was considered for desktop, tablet and mobile view.

![Apr-26-2021 17-14-45](https://user-images.githubusercontent.com/72312636/116162635-722f6e80-a6b3-11eb-832b-579e502d9a50.gif)

![Screen Shot 2021-04-26 at 5 12 29 PM](https://user-images.githubusercontent.com/72312636/116162819-c9354380-a6b3-11eb-9055-9ac69d357cb5.png)

## Error Handling

Error handling was built to give the user feedback if a bad response is returned from api calls or if a bad url path was accessed.
![Screen Shot 2021-04-26 at 5 21 56 PM](https://user-images.githubusercontent.com/72312636/116162904-ed912000-a6b3-11eb-95da-a593ce74214c.png)

## Future Considerations

1. Create a advanced search page for the user to search by hops, yeast, malt, or ABV.
2. Create a how-to page, for users who may be new to the hobby looking for more information on how to get started.
3. Allow the user to save tasting notes on recipes.
4. Tally up the grocery items with the click of a button.

## How to use this code

- Clone a copy of this repo to your local machine
- Cd into the new directory
- Run `npm install`
- To run Cypress - `npm test`

## Technologies Used

- ![React](https://camo.githubusercontent.com/4e4a3b5c3e9c00501ec866e2f2466c5a6032f838aca5f2cf3b14450e39e8a2f0/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163742532302d2532333230323332612e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d253233363144414642)

- ![ReactRouter](https://camo.githubusercontent.com/4f9d20f3a284d2f6634282f61f82a62e99ee9906537dc9859decfdc9efbb51ec/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163745f526f757465722d4341343234353f7374796c653d666f722d7468652d6261646765266c6f676f3d72656163742d726f75746572266c6f676f436f6c6f723d7768697465)

- [![JavaScript](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://www.javascript.com/)

- ![HTML5](https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white)

- ![Webpack](https://img.shields.io/badge/webpack%20-%238DD6F9.svg?&style=for-the-badge&logo=webpack&logoColor=black)

- ![Cypress](https://img.shields.io/badge/cypress-04C38E.svg?&style=for-the-badge&logo=cypress&logoColor=white)

- ![Node](https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white)

<!--Personal Definitions -->

[linkedin1]: https://www.linkedin.com/in/steven-mancine-13509521/
[github1]: https://github.com/itsnameissteven
