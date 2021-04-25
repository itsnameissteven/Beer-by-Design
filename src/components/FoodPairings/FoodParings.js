import React from 'react';
import { GiKnifeFork } from 'react-icons/gi'
import './FoodPairings.css';

export const FoodPairings = ({pairings}) => {
  const foodPairings = pairings.map((dish, index) => <p key={index}>{dish}</p>)

  if(!pairings) {
    return null
  }
  
  return (
    <div className="food-pairings">
      <div className="method__flex">
        <div className="icon">
        <GiKnifeFork className="icon__img"/>
        </div>
        <h3 className="method__header">MASH</h3>
      </div>
      {foodPairings}
    </div>
  )
}