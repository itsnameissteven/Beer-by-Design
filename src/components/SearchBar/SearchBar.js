import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './SearchBar.css';

const SearchBar = () => {
  const [search, setSearch] = useState('')

  return (
    <form className='search' onSubmit={(e) => e.preventDefault()}>
      <div className="search__container">
        <AiOutlineSearch className="search__icon"/>
        <input
          className="search__input"
          type="text"
          name="search"
          value={search}
          placeholder="Search for a beer recipe"
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && <AiOutlineClose className="search__clear" onClick={() => setSearch('')}/>}
      </div>
      <Link to={"/search/" + search} className="search__btn"><button onClick={() => setSearch('')}/></Link>
    </form>
  )
}

export default SearchBar;
