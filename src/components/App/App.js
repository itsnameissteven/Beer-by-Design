import React, {useState, useEffect} from 'react';
import { Switch, Route, NavLink, Redirect} from 'react-router-dom';
import  FeaturedBeers from '../FeaturedBeers/FeaturedBeers';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Recipe from '../Recipe/Recipe';
import SavedRecipes from '../SavedRecipes/SavedRecipes';
import Error from '../Error/Error';
import { getAPIs } from '../../apiCalls.js';
import './App.css';


function App() {
  const [beerList, setBeerList] = useState([]);
  const [error, setError] = useState('');
  const [savedRecipes, setSavedRecipes] = useState([]);

  useEffect(() => {
    getAPIs().then(data => setBeerList(data))
      .catch(err => setError(err.message));
  }, [])

  const saveRecipe = (newRecipe) => {
    const isSaved = savedRecipes.some( recipe => recipe.id === newRecipe.id);
    if(!isSaved) {
      setSavedRecipes([...savedRecipes, {
        id: newRecipe.id,
        name: newRecipe.name,
        abv: newRecipe.abv,
        srm: newRecipe.srm,
        ibu: newRecipe.ibu
      }]);
    }
  }

  const deleteSavedRecipe = (id) => {
    const newRecipeList = savedRecipes.filter(recipe => recipe.id !== id )
    setSavedRecipes(newRecipeList)
  }

  return (
    <div className="app">
      <nav className='nav'>
        <h1 className="nav__header">Brew by Design</h1>
        <NavLink exact to="/" className="nav-link" activeClassName="active" onClick={() => setError('')}>
          Home
        </NavLink>
        <NavLink to="/saved-recipes" className="nav-link" activeClassName="active" onClick={() => setError('')}>
          Saved Recipes
        </NavLink>
      </nav>
      <SearchBar />
      {error && <Redirect to="/error" />}
      <Switch>
        <Route path="/" exact render={() => { 
            return <FeaturedBeers beerList={beerList} />
        }}  
        />
        <Route path="/search/:search" render={({ match }) => {
          const {search} = match.params;
          return <SearchResults query={search.trim().replace(/ /g, "_")}/>;
        }} />
        <Route path="/recipe/:id" render={({ match }) => {
          const { id } = match.params
          return <Recipe id={id} saveRecipe={saveRecipe} setError={setError}/>
        }} />
        <Route path="/saved-recipes" render={() => {
          return <SavedRecipes recipes={savedRecipes} deleteRecipe={deleteSavedRecipe}/>
        }} />
        <Route render={() =>  <Error setError={setError}/>} />
      </Switch> 
    </div>
  );
}

export default App;
