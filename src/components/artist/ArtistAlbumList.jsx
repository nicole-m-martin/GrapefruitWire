import PropTypes from 'prop-types';
import React from 'react';
import ArtistAlbumItem from './ArtistAlbumItem';

function ArtistAlbumList({ albums }) {
  return (
    <ul>
      {albums.map((album) => (
        <li key={album.albumId}>
          <ArtistAlbumItem
            title={album.title}
            albumId={album.albumId}
            releaseDate={album.releaseDate}
          />
        </li>
      ))}
    </ul>
  );
}

ArtistAlbumList.propTypes = {
  albums: PropTypes.arrayOf(
    PropTypes.shape({
      albumId: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      releaseDate: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired
};

export default ArtistAlbumList;
