import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SearchItem = ({ name, id }) => {
  return (
    <div>

      {/* <Link to={`/${id}`}> */}
      <h1>Name: {name}</h1>
      {/* </Link> */}
      
    </div>
  );
};

SearchItem.propTypes = {

  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,

};

export default SearchItem;

