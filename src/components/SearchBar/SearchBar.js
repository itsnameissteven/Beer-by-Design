import React, {useState} from 'react';
import './SearchBar.css';

export const SearchBar = () => {
  const [search, setSearch] = useState('')

  return (
    <form className='search'>
      <input
        className="search__input"
        type="search"
        name="search"
        value={search}
        placeholder="Search for a beer recipe"
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  )
}