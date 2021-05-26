import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ArtistAlbumList from '../components/artist/ArtistAlbumList';
import { fetchAlbums } from '../services/brainz-api';

const ArtistContainer = () => {
  const { artistId } = useParams();
  const [loading, setLoading] = useState(true);
  const [albums, setAlbums] = useState([]);
  
  useEffect(() => {
    fetchAlbums(artistId)
      .then(setAlbums)
      .finally(() => setLoading(false));
  }, []);
  
  return loading ? (
    <h2>Loading...</h2>
  ) : (
    <main>
      <ArtistAlbumList albums={albums} />
    </main>
  );
};

export default ArtistContainer;
