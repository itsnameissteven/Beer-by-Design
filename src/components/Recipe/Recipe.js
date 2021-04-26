import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getSingleBeer } from '../../apiCalls';
import Ingredients from '../Ingredients/Ingredients';
import TargetData from '../TargetData/TargetData';
import Method from '../Method/Method';
import FoodPairings from '../FoodPairings/FoodParings';
import BrewTips from '../BrewTips/BrewTips';
import './Recipe.css';

const Recipe = ({ id, saveRecipe, setError }) => {
  const [recipe, setRecipe] = useState({})

  useEffect(() => {
    getSingleBeer(id).then(data => setRecipe(...data))
      .catch(err => setError(err.message))
  },[id, setError]);

  if(!recipe.name) {
    return <h1>Loading ....</h1>
  }

  return (
    <div className="recipe">
      <div className="recipe__header-container">
        <h1 className="recipe__name">{recipe.name}</h1>
        <button className="btn recipe-btn" onClick={() => saveRecipe(recipe)}>
          Save Recipe
        </button>
      </div>
      <div className="recipe__stats">
        <p className="recipe__tagline">{recipe.tagline}</p>
        <p className="recipe__abv">ABV<br />{recipe.abv}%</p>
        <p className="recipe__srm">SRM<br />{recipe.srm}</p>
        <p className="recipe__ibu">IBU<br />{recipe.ibu}</p>
      </div>
      <div className="recipe__about">
        <h3 className="recipe__about__header">ABOUT THIS BEER</h3>
        <p className="recipe__about__description">{recipe.description}</p>
         <BrewTips tips={recipe.brewers_tips} />
      </div>
      <div className="recipe__ingredients">
        <h2>Ingredients</h2>
        <Ingredients ingredients={recipe.ingredients} />
      </div>
      <div className="recipe__target-data">
        <h2>Overview</h2>
        <TargetData 
          volume={recipe.volume}
          boilVolume={recipe.boil_volume}
          abv={recipe.abv}
          ibu={recipe.ibu}
          srm={recipe.srm}
          finalGravity={recipe.target_fg}
          originalGravity={recipe.target_og}
          attenuation={recipe.attenuation_level}
        />
      </div>
      <div className="recipe__method">
        <Method mash={recipe.method.mash_temp} fermentation={recipe.method.fermentation}/>
      </div>
      <div className="recipe__food-pairings">
        <FoodPairings pairings={recipe.food_pairing} />
      </div>
    </div>
  )
}

Recipe.propTypes = {
  id: PropTypes.string,
  saveRecipe: PropTypes.func ,
  setError: PropTypes.func
}

export default Recipe;