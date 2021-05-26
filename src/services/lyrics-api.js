export const fetchLyrics = async (artistName, songTitle) => {
    const res = await fetch(
        `https://api.lyrics.ovh/v1/${artistName}/${songTitle}`
    );

    const data = await res.json();
    const lyrics = data.lyrics;

    return lyrics;
}
