import React from 'react';
import PropTypes from 'prop-types';
import SearchItem from './SearchItem';

function SearchList({ artists }) {
  return (
    <ul>
      {artists.map((artist) => 
        (<li key={artist.id}>
          <SearchItem
            name={artist.name}
          />

        </li>
        ))}
            
    </ul>
  );
}

SearchList.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired
};

export default SearchList;

