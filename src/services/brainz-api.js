export const fetchArtists = async (query, page, limit = 50) => {
  const offset = page * limit - limit;

  const res = await fetch(
    // eslint-disable-next-line max-len
    `http://musicbrainz.org/ws/2/artist?query=${query}&fmt=json&limit=${limit}&offset=${offset}`
  );

  const data = await res.json();
  // console.log(data.artists, 'API DATA ARTISTS');
  const artists = data.artists;
  const total = data.count;

  return {
    count: total,
    artistsArray: artists.map((artists) => ({
      artistId: artists.id,
      name: artists.name,
    })),
  };
};

export const fetchAlbums = async (artistId, page, limit = 10) => {
  const offset = page * limit - limit;

  const res = await fetch(
    // eslint-disable-next-line max-len
    `http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json&limit=${limit}&offset=${offset}`
  );

  const data = await res.json();
  const albums = data.releases;
  const total = data['release-count'];

  return {
    count: total,
    albumsArray: albums.map((album) => ({
      albumId: album.id,
      title: album.title,
      releaseDate: album.date,
    })),
  };
};

export const fetchSongs = async (albumId) => {
  const res = await fetch(
    `http://musicbrainz.org/ws/2/recording?release=${albumId}&fmt=json`
  );

  const data = await res.json();
  const songs = data.recordings;

  return songs.map((song) => ({
    songId: song.id,
    title: song.title,
  }));
};
