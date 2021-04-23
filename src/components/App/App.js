import React, {useState, useEffect} from 'react';
import { Switch, Route, } from 'react-router-dom';
import { FeaturedBeers } from '../FeaturedBeers/FeaturedBeers';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { getAPIs } from '../../apiCalls.js';
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
      <Switch>
        <Route path="/" exact render={() => { 
            return <FeaturedBeers beerList={beerList.slice(0, 3)} />
        }}  
        />
        <Route path="/search/:search" component={({ match }) => {
          const {search} = match.params;
          return <SearchResults query={search.trim().replace(/ /g, "_")}/>;
        }} />
      </Switch> 
    </div>
  );
}

export default App;
