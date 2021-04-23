import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { searchAPI } from '../../apiCalls';
import './SearchResults.css';
export const SearchResults = ({ query }) => {
  const [searchResults, setSearchResults] = useState([]);

  const beers = searchResults.map(beer => {
    const {id, name, description, hops, abv, srm, ibu} = beer
    return (
      <Link to={"/recipe/" + id}>
      <div className='recipe-card' key={id}>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{hops.join(' ')}</p>
        <p>{abv}% ABV</p>
        <p>{srm}</p>
        <p>{ibu}</p>
      </div>
      </Link>
    )
  })

  useEffect(() => {
    searchAPI(query).then(data => setSearchResults(data));
  }, [query])

  return <div className='search-results'>{beers}</div>
}