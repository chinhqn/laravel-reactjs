import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { axios } from 'axios';

export default class Create extends React.Component {
    constructor(props) {
        super();
        this.state = {
            data: []
        }
    }


    render() {
        return (
            <div>
                <h2>Create User</h2>
                <form className="form-horizontal">
                    <div className="form-group">
                        <label className="control-label col-sm-2">Name:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="name" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2">email:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="email" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2">PassWord:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="password" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-10 col-sm-offset-2">
                            <button type="submit" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </form>

            </div>
        )
    }
}
if (document.getElementById('create')) {
    ReactDOM.render(<Create />, document.getElementById('create'));
}