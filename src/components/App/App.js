import React, {useState, useEffect} from 'react';
import { Switch, Route, NavLink} from 'react-router-dom';
import  FeaturedBeers from '../FeaturedBeers/FeaturedBeers';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Recipe from '../Recipe/Recipe';
import SavedRecipes from '../SavedRecipes/SavedRecipes';
import { getAPIs } from '../../apiCalls.js';
import './App.css';


function App() {
  const [beerList, setBeerList] = useState([]);
  const [savedRecipes, setSavedRecipe] = useState([])

  useEffect(() => {
    getAPIs().then(data => setBeerList(data))
  }, [])

  const saveRecipe = (newRecipe) => {
    const isSaved = savedRecipes.some( recipe => recipe.id === newRecipe.id)
    if(!isSaved) {
      setSavedRecipe([...savedRecipes, {
        id: newRecipe.id,
        name: newRecipe.name,
        abv: newRecipe.abv,
        srm: newRecipe.srm,
        ibu: newRecipe.ibu
      }])
    }
  }

  return (
    <div className="app">
      <nav className='nav'>
        <h1 className="nav__header">Brew by Design</h1>
        <NavLink exact to="/" className="nav-link" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/how-to" className="nav-link" activeClassName="active">
          How to brew
        </NavLink>
        <NavLink to="/saved-recipes" className="nav-link" activeClassName="active">
          Saved Recipes
        </NavLink>
      </nav>
      <SearchBar />
      <Switch>
        <Route path="/" exact render={() => { 
            return <FeaturedBeers beerList={beerList.slice(19)} />
        }}  
        />
        <Route path="/search/:search" render={({ match }) => {
          const {search} = match.params;
          return <SearchResults query={search.trim().replace(/ /g, "_")}/>;
        }} />
        <Route path="/recipe/:id" render={({ match }) => {
          const { id } = match.params
          return <Recipe id={id} saveRecipe={saveRecipe}/>
        }} />
        <Route path="/saved-recipes" render={() => {
          return <SavedRecipes recipes={savedRecipes}/>
        }} />
      </Switch> 
    </div>
  );
}

export default App;
