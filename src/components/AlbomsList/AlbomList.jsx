import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './AlbomList.scss'


export const AlbomList = ({ selectedUserId, onSelectAlbum }) => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        if (selectedUserId) {
            fetch(`https://jsonplaceholder.typicode.com/albums?userId=${selectedUserId}`)
                .then((response) => response.json())
                .then((json) => {
                    setAlbums(json);
                });
        }
    }, [selectedUserId]);

    return (
        <>
            <ul className='album-list'>
                {albums.map((album) => (
                    <li key={album.id} className="album-item">
                        <h3 className="album-title">{album.title}</h3>
                        <Link to={'photos/' + album.id} onClick={() => onSelectAlbum(album.id)} className="album-link">Photos</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};
