import React, { useState, useEffect } from 'react';
import "./todo.scss";

export const Todo = ({ header, description }) => {
    const [isDone, setIsDone] = useState(false);

    const onTodoClick = () => {
        setIsDone(!isDone)
    };


    return (
        <li className={isDone ? "done" : ""} onClick={onTodoClick}>
            <h3>{header}</h3>
            <p>{description}</p>
        </li>
    );

}
