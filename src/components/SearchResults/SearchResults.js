import React, { useState, useEffect} from 'react';
import { searchAPI } from '../../apiCalls';

export const SearchResults = ({ query }) => {
  const [searchResults, setSearchResults] = useState([]);

  const beers = searchResults.map(result => <h1>{result.name}</h1>)
  useEffect(() => {
    // console.log("search api")
    searchAPI(query).then(data => setSearchResults(data));
  }, [query])

  return <div>{beers}</div>
}