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
            <ul>
                {albums.map((album) => (
                    <li key={album.id}>
                        <h3>{album.title}</h3>
                        <Link to={"" + "album.id"} onClick={() => onSelectAlbum(album.id)}>Photos</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};
