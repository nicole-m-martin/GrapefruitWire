import PropTypes from 'prop-types';
import React from 'react';
import AlbumSongItem from './AlbumSongItem';

function AlbumSongList({ songs }) {
  return (
    <ul aria-label="songs">
      {songs.map((song) => (
        <li key={song.songId}>
          <AlbumSongItem songId={song.songId} title={song.title} />
        </li>
      ))}
    </ul>
  );
}

AlbumSongList.propTypes = {
  songs: PropTypes.arrayOf(
    PropTypes.shape({
      songId: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default AlbumSongList;
