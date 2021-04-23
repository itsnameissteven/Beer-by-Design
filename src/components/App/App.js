import React, {useState, useEffect} from 'react';
import { Switch, Route, } from 'react-router-dom';
import { FeaturedBeers } from '../FeaturedBeers/FeaturedBeers';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Recipe } from '../Recipe/Recipe';
import { getAPIs } from '../../apiCalls.js';
import './App.css';


function App() {
  const [beerList, setBeerList] = useState([]);

  useEffect(() => {
    getAPIs().then(data => setBeerList(data))
  }, [])

  return (
    <div className="app">
      <div className='container'>
        <h1 className="app__header">Brew by Design</h1>
      </div>
      <SearchBar />
      <Switch>
        <Route path="/" exact render={() => { 
            return <FeaturedBeers beerList={beerList.slice(0, 3)} />
        }}  
        />
        <Route path="/search/:search" render={({ match }) => {
          const {search} = match.params;
          return <SearchResults query={search.trim().replace(/ /g, "_")}/>;
        }} />
        <Route path="/recipe/:id" render={({ match }) => {
          const { id } = match.params
          return <Recipe id={id}/>
        }} />
      </Switch> 
    </div>
  );
}

export default App;
