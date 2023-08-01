import React from 'react';
import "./loginForm.scss";

export class LoginForm extends React.Component {
    constructor() {
        super();

        this.state = {
            login: '',
            password: '',
            error: ''
        }
    }

    checkEmail(email) {
        let mail = email;
        let firstPart = mail.slice(0, mail.indexOf('@')).split('').map(function (x) {
            if (x === '.') {
                return '!'
            }
            else
                return x
        })
        mail = firstPart.join('') + mail.slice(mail.indexOf('@'))


        let userName = mail.slice(0, mail.indexOf('@'));
        let domainName = mail.slice(mail.indexOf('@') + 1, mail.indexOf('.'));
        let domainExtens = mail.slice(mail.indexOf('.') + 1);

        let accessAt = mail.split("@").length - 1 === 1;
        let accessDot = mail.split(".").length - 1 === 1;
        let accessPos = mail.indexOf('@') < mail.indexOf('.');
        let accessLength = userName.length > 3 && domainName.length > 2 && domainExtens.length > 1;

        return (accessAt && accessDot && accessPos && accessLength);
    }




    checkPassword(password) {
        return (password.length < 6);
    }



    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }
        );
        if (!this.checkEmail(this.state.login) || this.checkPassword(this.state.password)) {
            this.setState({
                error: 'Incorrect email or password'
            }
            );
        }
    }


    onSubmit = (e) => {
        e.preventDefault();

        fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.login,
                password: this.state.password
            })
        }).then(response => response.json())
            .then((response) => {
                if (response.token) {
                    localStorage.token = response.token
                    this.props.loadToken()
                }
                else {
                    this.setState({
                        error: 'Incorrect email or password'
                    })
                }
            }
            )
    }

    render() {

        return (
            <form action="" className='form-container'>
                <input type='email' name='login' placeholder='email' onChange={this.onInputChange} />
                <input type='password' name='password' placeholder='password' onChange={this.onInputChange} />
                <p>{this.state.error}</p>

                <button onClick={this.onSubmit}>Submit</button>
            </form>
        );
    }
}
