import React from 'react';

export default function Search({ searchQuery, onSearchChange, onSubmit }) {

    const [searchQuery, setSearchQuery] = 


  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="query">Search: </label>
      <input
        id="query"
        type="text"
        value={searchQuery}
        onChange={onSearchChange}
      />
      <button aria-label="search">Submit</button>        
    </form>
  );
}

