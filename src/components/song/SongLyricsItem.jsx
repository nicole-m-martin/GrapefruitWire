import React from 'react';
import PropTypes from 'prop-types';

const SongLyricsItem = ({ lyrics }) => {

  return (
    <div role="div" aria-label="lyric">
      <p>{lyrics}</p>
    </div>
  );
};

SongLyricsItem.propTypes = {
  lyrics: PropTypes.string.isRequired,
};

export default SongLyricsItem;
