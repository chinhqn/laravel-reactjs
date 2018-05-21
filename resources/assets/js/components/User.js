import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { axios } from 'axios';

export default class User extends React.Component {
    constructor(props) {
        super();
        this.state = {
            data: []
        }
    }

    componentWillMount() {
        let $this = this;

        axios.get('api/users').then(res => {
            $this.setState({
                data: res.data
            })
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <h2>Users Listing</h2>
                <a href="/users/create" className="btn btn-primary">Thêm mới User</a>
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((user, index) => (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <a href="" className="btn btn-primary">Edit</a>
                                    <a href="" className="btn btn-danger">Delete</a>
                                </td>
                            </tr>
                        )
                        )}

                    </tbody>
                </table>

            </div>
        )
    }
}
if (document.getElementById('app')) {
    ReactDOM.render(<User />, document.getElementById('app'));
}