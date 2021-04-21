
import React, {useState, useEffect} from 'react';
import { FeaturedBeers } from '../FeaturedBeers/FeaturedBeers'
import { getAPIs } from '../../apiCalls.js'
import './App.css';


function App() {
  const [beerList, setBeerList] = useState([]);

  useEffect(() => {
    getAPIs().then(data => setBeerList(data))
  }, [])

  return (
    <div className="app">
      <h1 className="app__header">Beers by design</h1>
      <FeaturedBeers beerList={beerList.slice(0, 3)} />
    </div>
  );
}

export default App;
