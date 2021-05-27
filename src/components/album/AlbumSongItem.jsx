import React from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import style from '../app/App.css';

const AlbumSongItem = ({ songId, title }) => {
  const { artistName } = useParams();
    
  return (
    <div className={style.songItem}>
      <Link to={`/song/${songId}/${artistName}/${title}`}>
        <h1>{title}</h1>
      </Link>
    </div>
  );
};

AlbumSongItem.propTypes = {
  songId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default AlbumSongItem;
