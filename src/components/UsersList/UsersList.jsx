import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './UsersList.scss'



export const UsersList = ({ onSelectUser }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => {
                setUsers(json);
            });
    }, []);

    return (
        <>
            <ul className="user-list ">
                {users.map((user) => (
                    <li key={user.id} className="user-item">
                        <h3 className="user-name">{user.name}</h3>
                        <Link className="user-link" to={'albums/' + user.id} onClick={() => onSelectUser(user.id)}>Albums</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};
