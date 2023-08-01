



import React from 'react';
import "./UsersTable.scss";
import { UsersTableRow } from '../../components/UsersTableRow/UsersTableRow.jsx'



export class UsersTable extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            surname: '',
            phone: '',
            posts: [],
            showForm: false

        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    posts: json
                })
            })
    }


    onSubmit = (e) => {
        e.preventDefault();


        this.setState((prevState) => ({
            posts: [
                ...prevState.posts, {
                    name: `${this.state.name} ${this.state.surname}`,
                    phone: this.state.phone,
                    id: `${this.state.name} ${this.state.surname}`
                }
            ],
        }));
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    onDeleteClick = (postID) => {
        this.setState((prevState) => ({
            posts: prevState.posts.filter((elem) => elem.id != postID)
        }));
    }


    toggleFormVisibile = () => {
        this.setState((prevState) => ({
            showForm: !prevState.showForm,
        }));
    }

    render() {
        return (
            <div className='container'>

                <table>
                    <tbody>
                        {this.state.posts.map((elem) => (
                            <UsersTableRow name={elem.name.split(' ')[0]} surname={elem.name.split(' ')[1]} tel={elem.phone} key={elem.id} deleteFunction={() => this.onDeleteClick(elem.id)} />
                        ))}
                    </tbody>
                </table>

                <button onClick={this.toggleFormVisibile}>Add user</button>

                {
                    this.state.showForm && (
                        <form action="" className='form-container'>
                            <input name='name' placeholder='name' onChange={this.onInputChange} />
                            <input name='surname' placeholder='surname' onChange={this.onInputChange} />
                            <input name='phone' placeholder='phone number' onChange={this.onInputChange} />

                            <button onClick={this.onSubmit}>Save</button>
                            <button onClick={this.toggleFormVisibile}>Close</button>
                        </form>
                    )
                }


            </div>

        )
    }
}