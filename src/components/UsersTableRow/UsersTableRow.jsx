import React from 'react';
import "./UsersTableRow.scss";

export class UsersTableRow extends React.Component {
    constructor() {
        super();

    }



    render() {

        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.surname}</td>
                <td>{this.props.tel}</td>
                <td><button onClick={this.props.deleteFunction}>delete</button></td>
            </tr>
        );
    }
}


