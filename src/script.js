import "./styles/style.scss";

import React from 'react';
import {createRoot} from 'react-dom/client';
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";


import TodoList from './containers/todoList/todoList.jsx'



let todoList = {
    list: []
}

const reducer = (state = todoList, action) => {
    switch(action.type){
        case 'ADD':{
            state = {
                ...state, 
                list: [...state.list, action.payload]
            };
            break;
        }
    }

    return state;
}



const store = createStore(reducer)










const App = () => {


    return (
        <Provider store={store}>
            <TodoList />
        </Provider>
    )

}


const root = createRoot(document.getElementById('App'));
root.render(<App />);