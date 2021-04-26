import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './SavedRecipes.css';

const SavedRecipes = ({ recipes }) => {
  console.log(recipes)
  const recipeList = recipes.map(recipe => {
    return (
      <div className="saved-recipes__card" key={recipe.id}>
        <h3>{recipe.name}</h3>
        <p>ABV <br /> {recipe.abv}%</p>
        <p>SRM <br /> {recipe.srm} </p>
        <p>IBU <br /> {recipe.ibu}</p>
        <Link to={`/recipe/${recipe.id}`} className="recipe-link-btn saved-btn">
          <button className="btn saved">View Recipe</button>
        </Link>
      </div>
    )
  })
  return (
    <div className="saved-recipes">
      <h1>Your Saved Recipes</h1>
      {recipeList}
    </div>

  )
}

SavedRecipes.propTypes = {
  recipes: PropTypes.array
}

export default SavedRecipes;
