import "./styles/style.scss";

import React, { useLayoutEffect } from 'react';
import { createRoot } from 'react-dom/client'

const Header = () => {
    return (
        <header>
            <h1>Info site for programmers</h1>
        </header>
    )
}

const SideBar = ({ items }) => {
    return (
        <aside className="sidebar">
            <ul>
                {items.map((elem, index) => (<li key={`${elem}--${index}`}><a href="#">{elem}</a></li>))}
            </ul>
        </aside>
    )
}

const ContentBlock = ({ item }) => {
    return (
        <div className="block">
            <h2>{item}</h2>
            <a href="#">Read more...</a>
        </div>
    )
}



const App = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <SideBar items={["Abot Gulp", "About WebPack", "Abot React"]}></SideBar>
                <main className="main-content">
                    <ContentBlock item={'The best framework - Angular!'} />
                    <ContentBlock item={'How to become the best programmer'} />
                </main>
            </div>
        </div>
    )
}

const root = createRoot(document.getElementById('App'));
root.render(App());