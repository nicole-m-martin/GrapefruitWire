import React from 'react';
import PropTypes from 'prop-types';
import SearchItem from './SearchItem';
import style from '../app/App.css';
function SearchList({ artists }) {
  return (
    <ul aria-label="artistList" className={style.list}>
      {artists.map((artist) => (
        <li key={artist.artistId}>
          <SearchItem name={artist.name} artistId={artist.artistId} />
        </li>
      ))}
    </ul>
  );
}

SearchList.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      artistId: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default SearchList;
