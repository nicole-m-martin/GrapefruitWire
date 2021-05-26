import React from 'react';
import PropTypes from 'prop-types';

const SongLyricsItem = ({ lyrics }) => {

    return (
        <div>
            <p>{lyrics}</p>
        </div>
    );
};

SongLyricsItem.propTypes = {
    lyrics: PropTypes.string.isRequired,
}

export default SongLyricsItem;
