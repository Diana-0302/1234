import React, { useState, useEffect } from 'react';
import './Photos.scss'


export const Photos = ({ selectedAlbumId }) => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=1`)
            .then((response) => response.json())
            .then((json) => {
                setPhotos(json);
            });
    }, [selectedAlbumId]);

    return (
        <>
            <div>
                <h2>Photos in Album {selectedAlbumId}</h2>
                <div className="photo-list">
                    {photos.map((photo) => (
                        <div key={photo.id} className="photo">
                            <img src={photo.url} alt={photo.title} />
                            <p>{photo.title}</p>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
};
