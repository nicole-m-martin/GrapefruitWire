/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import grapefruit from '../../../public/grapefruit.jpeg';
import style from  '../app/App.css';

const ArtistAlbumItem = ({ albumId, title, releaseDate }) => {
  const coverArt = `http://coverartarchive.org/release/${albumId}/front`;
  const addDefaultSrc = (e) => {
    e.target.src = grapefruit;
  };

  const { artistName } = useParams();

  return (
    <div className={style.artistAlbum}>
      <Link to={`/album/${albumId}/${artistName}`}>
        <img src={coverArt} onError={addDefaultSrc} alt={title} />
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



