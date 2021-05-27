import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import AlbumSongList from '../components/album/AlbumSongList';
import { fetchSongs } from '../services/brainz-api';

const AlbumContainer = () => {
  const { albumId } = useParams();
  const [loading, setLoading] = useState(true);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetchSongs(albumId)
      .then(setSongs)
      .finally(() => setLoading(false));
  }, []);

  return loading ? (
    <h2>Loading...</h2>
  ) : (
    <main>
      <h1>Tracklist</h1>
      <AlbumSongList songs={songs} />
    </main>
  );
};

export default AlbumContainer;
