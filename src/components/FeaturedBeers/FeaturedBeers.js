import React from 'react';
import './FeaturedBeers.css'

export const FeaturedBeers = ({ beerList }) => {
  const featuredBeers = beerList.map((beer, i) => {
    return (
      <div key={i}> 
        <h1> {beer.name}</h1>
        <p>{beer.tagline}</p>
        <p>{beer.description}</p>
      </div>
    )
  })
  return( 
    <div className="featured-beers">
      <h2 className="featured-beers__header">This months specials</h2>
      {featuredBeers}
    </div>
  
  )
}