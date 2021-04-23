
import React, {useState, useEffect} from 'react';
import { Switch, Route, Redirect,Link } from 'react-router-dom';
import { FeaturedBeers } from '../FeaturedBeers/FeaturedBeers';
import { SearchBar } from '../SearchBar/SearchBar';
import { getAPIs } from '../../apiCalls.js'
import './App.css';


function App() {
  const [beerList, setBeerList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    getAPIs().then(data => setBeerList(data))
  }, [])

  const updateSearch = (query) =>  setSearchQuery(query);
  

  return (
    <div className="app">
      <h1 className="app__header">Brew by Design</h1>
      <SearchBar updateSearch={updateSearch}/>
      {searchQuery && <Redirect to={'/search/' + searchQuery} />}
      <Switch>
        <Route path="/" exact render={() => { 
            return <FeaturedBeers beerList={beerList.slice(0, 3)} />
        }}  
        />
        <Route path="/search/:search" render={({ match }) => {
          return <Link to='/' ><h1>hey boo boo</h1></Link>
        }} />
      </Switch>
      
    </div>
  );
}

export default App;
