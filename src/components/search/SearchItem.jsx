import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SearchItem = ({ name, artistId }) => {
  // console.log(SearchItem, 'search item');
  return (
    <div>

      <Link to={`/artist/${artistId}`}>
        <h1>Name: {name}</h1>
      </Link>
      
    </div>
  );
};

SearchItem.propTypes = {
  name: PropTypes.string.isRequired,
  artistId: PropTypes.string.isRequired,
};

export default SearchItem;

