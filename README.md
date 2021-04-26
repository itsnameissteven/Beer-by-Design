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

### Recipe Details

This page features a detailed recipe, with access to an overview, ingredients, food pairings, and method for brewing.

### Search

Users can search for a recipe using the search bar. After completing a search an overview of each recipe is displayed. Click on the recipe for to see the complete recipe.

## Responsive Design

Responsive design was considered for desktop, tablet and mobile view.

## Error Handling

Error handling was built to give the user feedback if a bad response is returned from api calls or if a bad url path was accessed.

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
