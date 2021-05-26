import React, { useState, useEffect } from 'react';
import SearchList from '../components/search/SearchList';
import { fetchArtists } from '../services/brainz-api';

const SearchContainer = () => {
  const [loading, setLoading] = useState(true);
  const [artists, setArtists] = useState([]);
  const [page, setPage] = useState(1);
  const [artistsPerPage, setArtistsPerPage] = useState(10);

  const indexOfLastArtist = page * artistsPerPage;
  const indexOfFirstArtist = indexOfLastArtist - artistsPerPage;
  const currentArtists = artists.slice(indexOfFirstArtist, indexOfLastArtist);

  useEffect(() => {
    fetchArtists()
      .then(setArtists)
      .finally(() => setLoading(false));
    
  }, [setArtistsPerPage]);

  return loading ? (
    <h2> Loading...</h2>
  ) : (
    <main>
      <span>Page: {page} </span>
      <button onClick={() => setPage((page) => page - 1)}>Prev</button> 
      <button onClick={() => setPage((page) => page + 1)}>Next</button>
      <SearchList artists={currentArtists}/>
    </main>
  );

};

export default SearchContainer;

