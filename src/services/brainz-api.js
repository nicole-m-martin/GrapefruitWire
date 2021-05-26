export const fetchArtists = async () => {
  const res = await fetch(
    'http://musicbrainz.org/ws/2/artist?query=beyonce&fmt=json&limit=25'
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
