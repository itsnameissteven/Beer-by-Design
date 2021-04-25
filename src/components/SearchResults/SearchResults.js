import React, { useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { searchAPI } from '../../apiCalls';
import { GiHops } from 'react-icons/gi';
import './SearchResults.css';

const SearchResults = ({ query }) => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    searchAPI(query).then(data => setSearchResults(data));
  }, [query])

  const beers = searchResults.map(beer => {
    const { id, name, description, hops, abv, srm, ibu } = beer;
    const hopString = hops.join(', ')
    return (
      <Link to={"/recipe/" + id} key={id} className="recipe-link">
        <div className='recipe-card'>
          <h3 className="recipe-card__name">{name}</h3>
          <p className="recipe-card__description">{description}</p>
          <p className="recipe-card__hops">
          <span className="hops">Hops: <GiHops className="hop-icon"/></span>
          {hopString}
          </p>
          <div className="beer-stats">
            <p className="beer-stats__number">{abv}% ABV</p>
            <p className="beer-stats__number">{srm} SRM</p>
            <p className="beer-stats__number">{ibu} IBU</p>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <div className='search-results'>
      {!beers.length ? <h1 className="no-results">Sorry no results found please try again</h1> : beers}
    </div>
  )
}

SearchResults.propTypes = {
  query: PropTypes.string
}

export default SearchResults;