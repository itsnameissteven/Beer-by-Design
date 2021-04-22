import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'
import './SearchBar.css';

export const SearchBar = () => {
  const [search, setSearch] = useState('')

  return (
    <form className='search'>
      <div className="search__container">
        <AiOutlineSearch className="search__icon"/>
        <input
          className="search__input"
          type="search"
          name="search"
          value={search}
          placeholder="Search for a beer recipe"
          onChange={(e) => setSearch(e.target.value)}
        />
        <AiOutlineClose className="search__clear" />
        {/* Add a clear button here */}
      </div>
    </form>
  )
}