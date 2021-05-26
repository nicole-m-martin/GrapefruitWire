export const fetchArtists = async () => {
  const res = await fetch(
    'http://musicbrainz.org/ws/2/artist?query=the&fmt=json&limit=25'
  );

  const data = await res.json();
  const artists = data.artists;

  return artists.map((artists) => ({
    artistId: artists.id,
    name: artists.name,
  }));
};

export const fetchAlbums = async (artistId) => {
  const res = await fetch(
    `http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json`
  );

  const data = await res.json();
  const albums = data.releases;

  return albums.map((album) => ({
    albumId: album.id,
    title: album.title,
    releaseDate: album.date,
  }));
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
