import React from 'react';
import PropTypes from 'prop-types';
import './FeaturedBeers.css'

const FeaturedBeers = ({ beerList }) => {
  const featuredBeers = beerList.map((beer, i) => {
    return (
      <div className="beer-card" key={i}> 
        <h3 className="beer-card__name"> {beer.name}</h3>
        <p className="beer-card__tagline">{beer.tagline}</p>
        <p className="beer-card__description">{beer.description}</p>
        <button className="beer-card__btn">See details</button>
      </div>
    )
  })
  return( 
    <div className="featured-beers">
      <h2 className="featured-beers__header">Recipes in the Spotlight</h2>
      {featuredBeers}
    </div> 
  )
}

FeaturedBeers.propTypes = {
  beerList: PropTypes.arrayOf(PropTypes.object)
}

export default FeaturedBeers;

