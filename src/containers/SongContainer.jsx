import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import SongLyricsItem from '../components/song/SongLyricsItem';
import { fetchLyrics } from '../services/lyrics-api';

const SongContainer = () => {
    const [loading, setLoading] = useState(true);
    const [lyrics, setLyrics] = useState('');

    const { artistName, title } = useParams();

    useEffect(() => {
        fetchLyrics(artistName, title)
            .then(setLyrics)
            .finally(() => setLoading(false));
    }, []);
    
    return loading ? (
        <h2>Loading...</h2>
    ) : (
        <main>
            <SongLyricsItem lyrics={lyrics}/>
        </main>
    )
}

export default SongContainer;
