import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from '../app/App.css';

const SearchItem = ({ name, artistId }) => {
  // console.log(SearchItem, 'search item');
  return (
    <div className={style.searchItem}>

      <Link to={`/artist/${artistId}/${name}`}>
        <h1>{name}</h1>
      </Link>
    </div>
  );
};

SearchItem.propTypes = {
  name: PropTypes.string.isRequired,
  artistId: PropTypes.string.isRequired,
};

export default SearchItem;

