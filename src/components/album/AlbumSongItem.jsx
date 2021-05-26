import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AlbumSongItem = ({ songId, title }) => {
    return (
        <div>
            <Link to={`/song/${songId}`}>
                <h1>{title}</h1>
            </Link>
        </div>
    );
};

AlbumSongItem.propTypes = {
    songId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default AlbumSongItem;
