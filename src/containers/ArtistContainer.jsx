import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ArtistAlbumList from '../components/artist/ArtistAlbumList';
import { fetchAlbums } from '../services/brainz-api';

const ArtistContainer = () => {
  const { artistId } = useParams();
  const [loading, setLoading] = useState(true);
  const [albums, setAlbums] = useState([]);
  const [count, setCount] = useState();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  
  useEffect(() => {
    fetchAlbums(artistId, page, limit)
      .then(({count, albumsArray }) => {
        setAlbums(albumsArray);
        setCount(count);
      })
      .finally(() => setLoading(false));
  }, [page]);

  const totalPages = Math.ceil(count / limit);
  
  return loading ? (
    <h2>Loading...</h2>
  ) : (
    <main>
      <button 
        disabled={page < 2} 
        onClick={() => setPage((page) => page - 1)}>&lt;</button> 
      <span>{`${page}/${totalPages}`}</span>
      <button 
        disabled={page >= totalPages} 
        onClick={() => setPage((page) => page + 1)}>&gt;</button>
      <ArtistAlbumList albums={albums} />
    </main>
  );
};

export default ArtistContainer;
