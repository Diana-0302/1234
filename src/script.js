import "./styles/style.scss";

import React from 'react';
import { createRoot } from 'react-dom/client';


import { UsersTable } from './containers/UsersTable/UsersTable.jsx'
import { LoginForm } from './components/loginForm/loginForm.jsx'





class App extends React.Component {
    constructor() {
        super();

        this.state = {
            token: localStorage.token
        }
    }

    loadToken = () => {
        this.setState({
            token: localStorage.token
        })
    }

    render() {
        return (
            <>
                {!localStorage.token && <LoginForm loadToken={this.loadToken} />}
                {localStorage.token && <UsersTable />}
            </>
        )
    }
}


const root = createRoot(document.getElementById('App'));
root.render(<App />);