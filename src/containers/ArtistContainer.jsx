import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ArtistAlbumList from '../components/artist/ArtistAlbumList';
import { fetchAlbums } from '../services/brainz-api';

const ArtistContainer = () => {
  const { artistId } = useParams();
  const [loading, setLoading] = useState(true);
  const [albums, setAlbums] = useState([]);
  const [page, setPage] = useState(1);
  const [albumsPerPage, setAlbumsPerPage] = useState(10);

  const indexOfLastAlbum = page * albumsPerPage;
  const indexOfFirstAlbum = indexOfLastAlbum - albumsPerPage;
  const currentAlbums = albums.slice(indexOfFirstAlbum, indexOfLastAlbum);
  
  useEffect(() => {
    fetchAlbums(artistId)
      .then(setAlbums)
      .finally(() => setLoading(false));
  }, [setAlbumsPerPage]);
  
  return loading ? (
    <h2>Loading...</h2>
  ) : (
    <main>
      <span>Page: {page} </span>
      <button onClick={() => setPage((page) => page - 1)}>Prev</button> 
      <button onClick={() => setPage((page) => page + 1)}>Next</button>
      <ArtistAlbumList albums={currentAlbums} />
    </main>
  );
};

export default ArtistContainer;
