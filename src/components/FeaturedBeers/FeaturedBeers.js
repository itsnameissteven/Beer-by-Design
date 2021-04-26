import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './FeaturedBeers.css';
import  homebrew from '../../assets/homebrew.jpg';

const FeaturedBeers = ({ beerList }) => {
  const featuredBeers = beerList.map((beer, i) => {
    return (
      <div className="beer-card" key={i}> 
        <h3 className="beer-card__name"> {beer.name}</h3>
        <p className="beer-card__tagline">{beer.tagline}</p>
        <p className="beer-card__description">{beer.description}</p>
        <Link to={`/recipe/${beer.id}`} className="recipe-link-btn">
        <button className="btn">View Recipe</button>
        </Link>
      </div>
    )
  })

  return ( 
    <div className="featured-beers">
      <div className="img-container">
        <img className="hero-img" src={homebrew} alt="homebrew beer on a table"/>
        <p className="hero-img-mantra">"Relax. Don't worry. And <br />have a homebrew." - Charlie Papazian</p>
      </div>
      <h2 className="featured-beers__header">Recipes in the Spotlight</h2>
      {featuredBeers}
    </div> 
  )
}

FeaturedBeers.propTypes = {
  beerList: PropTypes.arrayOf(PropTypes.object)
}

export default FeaturedBeers;

