
import React, {useState, useEffect} from 'react';
import { FeaturedBeers } from '../FeaturedBeers/FeaturedBeers'
import { SearchBar } from '../SearchBar/SearchBar';
import { getAPIs } from '../../apiCalls.js'
import './App.css';


function App() {
  const [beerList, setBeerList] = useState([]);

  useEffect(() => {
    getAPIs().then(data => setBeerList(data))
  }, [])

  return (
    <div className="app">
      <h1 className="app__header">Brew by Design</h1>
      <SearchBar />
      <FeaturedBeers beerList={beerList.slice(0, 3)} />
    </div>
  );
}

export default App;
