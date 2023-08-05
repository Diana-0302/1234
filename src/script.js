import "./styles/style.scss";

import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";

import { UsersList } from './components/UsersList/UsersList.jsx'
import { AlbomList } from './components/AlbomsList/AlbomList.jsx'
import { Photos } from './components/Photos/Photos.jsx'




const App = () => {
    const [selectedUserId, setSelectedUserId] = useState(null);

    const handleUserSelect = (userId) => {
        setSelectedUserId(userId);
    };

    const [selectedAlbumId, setSelectedAlbumId] = useState(null);

    const handleAlbumSelect = (albumId) => {
        setSelectedAlbumId(albumId);
    };

    return (
        <>
            <Routes>
                <Route path="/" element={<UsersList onSelectUser={handleUserSelect} />}></Route>
                <Route path="/albums/:id" element={<AlbomList selectedUserId={selectedUserId} onSelectAlbum={handleAlbumSelect} />}></Route>
                <Route path="/albums/:id/photos/:id" element={<Photos selectedAlbumId={selectedAlbumId} />} />
            </Routes>
        </>
    );
};



const root = createRoot(document.getElementById('App'));
root.render(
    <HashRouter>
        <App />
    </HashRouter>
);