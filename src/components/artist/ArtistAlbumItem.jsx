/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const ArtistAlbumItem = ({ albumId, title, releaseDate }) => {
  return (
    <div>
      <Link to={`/artist/${albumId}`}>
        <img src={`http://coverartarchive.org/release/${albumId}/front`} alt={title} />;
      </Link>
      <h1>{title}</h1>
      <p>{releaseDate}</p>
    </div>
  );
};

ArtistAlbumItem.propTypes = {
  albumId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
};

export default ArtistAlbumItem;



