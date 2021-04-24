import React, { useState, useEffect } from 'react';
import { getSingleBeer } from '../../apiCalls';
import { Ingredients } from '../Ingredients/Ingredients'
import { TargetData } from '../TargetData/TargetData'
import './Recipe.css'

export const Recipe = ({ id }) => {
  const [recipe, setRecipe] = useState({})

  useEffect(() => {
    getSingleBeer(id).then(data => setRecipe(...data));
  },[id]);

  return (
    <div className="recipe">
      <h1 className="recipe__name">{recipe.name}</h1>
      <div className="recipe__stats">
        <p className="recipe__tagline">{recipe.tagline}</p>
        <p className="recipe__abv">ABV<br />{recipe.abv}%</p>
        <p className="recipe__srm">SRM<br />{recipe.srm}</p>
        <p className="recipe__ibu">IBU<br />{recipe.ibu}</p>
      </div>
      <div className="recipe__about">
        <h3 className="recipe__about__header">ABOUT THIS BEER</h3>
        <p className="recipe__about__description">{recipe.description}</p>
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
    </div>
  )
}