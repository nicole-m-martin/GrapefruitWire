import React, { useState, useEffect } from 'react';
import SearchList from '../components/search/SearchList';
import { fetchArtists } from '../services/brainz-api';

const SearchContainer = () => {
  const [loading, setLoading] = useState(true);
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    fetchArtists()
      .then(setArtists)
      .finally(() => setLoading(false));
    
  }, []);

  return loading ? (
    <h2> Loading...</h2>
  ) : (
    <main>
      <SearchList artists={artists}/>
    </main>
  );

};

export default SearchContainer;
