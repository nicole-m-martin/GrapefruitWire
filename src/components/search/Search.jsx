/* eslint-disable react/prop-types */
import React from 'react';

export default function Search({ searchQuery, onSearchChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="query">Search: </label>
      <input
        placeholder="Search Artist..."
        id="query"
        type="text"
        value={searchQuery}
        onChange={onSearchChange}
      />
      <button aria-label="search">Submit</button>
    </form>
  );
}
