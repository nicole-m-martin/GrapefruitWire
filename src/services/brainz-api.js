export const fetchArtists = async () => {

  const res = await fetch(
    `http://musicbrainz.org/ws/2/artist?query=beyonce&fmt=json&limit=25`
  );

  const data = await res.json();

//   console.log(data, 'DATA');


  const artists = data.artists;

//   console.log(artists, 'ARTISTS');


  return artists.map(artists => ({
    id: artists.id,
    name: artists.name
  }));

};
