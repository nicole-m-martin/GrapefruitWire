import React, { useState, useEffect } from 'react';
import SearchList from '../components/search/SearchList';
import Search from '../components/search/Search';
import { fetchArtists } from '../services/brainz-api';

const SearchContainer = () => {
  const [loading, setLoading] = useState(false);
  const [artists, setArtists] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(50);
  const [searchQuery, setSearchQuery] = useState('');

  const handleOnSubmit = (e) => {
    e.preventDefault();
    fetchArtists(searchQuery, page, limit)
      .then(({ count, artistsArray }) => {
        setArtists(artistsArray);
        setCount(count);
      })
      .finally(() => setLoading(false));
  };

  const handleOnChange = ({ target }) => {
    setSearchQuery(target.value);
  };

  useEffect(() => {
    fetchArtists(searchQuery, page, limit)
      .then(({ count, artistsArray }) => {
        setArtists(artistsArray);
        setCount(count);
      })
      .finally(() => setLoading(false));
  }, [page]);

  const totalPages = Math.ceil(count / limit);

  return loading ? (
    <h2> Loading...</h2>
  ) : (
    <main>
      <Search
        searchQuery={searchQuery}
        onSearchChange={handleOnChange}
        onSubmit={handleOnSubmit}
      />
      {totalPages > 0 && (
        <>
          <button
            disabled={page < 2}
            onClick={() => setPage((page) => page - 1)}
          >
            &lt;
          </button>

          <span>{`${page}/${totalPages}`}</span>

          <button
            disabled={page >= totalPages}
            onClick={() => setPage((page) => page + 1)}
          >
            &gt;
          </button>
        </>
      )}
      <SearchList artists={artists} />
    </main>
  );
};

export default SearchContainer;
