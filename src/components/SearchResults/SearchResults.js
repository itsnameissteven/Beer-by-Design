import React, { useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { searchAPI } from '../../apiCalls';
import './SearchResults.css';

const SearchResults = ({ query }) => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    searchAPI(query).then(data => setSearchResults(data));
  }, [query])

  const beers = searchResults.map(beer => {
    const { id, name, description, hops, abv, srm, ibu } = beer;
    return (
      <Link to={"/recipe/" + id} key={id}>
        <div className='recipe-card'>
          <h3>{name}</h3>
          <p>{description}</p>
          <p>{hops.join(' ')}</p>
          <p>{abv}% ABV</p>
          <p>{srm}</p>
          <p>{ibu}</p>
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