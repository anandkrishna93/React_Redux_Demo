import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

let startPage = 1;
class userList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            userList: [],
            selectedUserDetails: []
        }
    }

    getUserList = async (pageNo) => {
        try {
            const response = await axios.get(`https://gorest.co.in/public-api/users?page=${pageNo}`);
            this.setState({ userList: response.data.data });
        } catch (e) {
            console.log(e)
        }
    }

    viewDetails = async (userId) => {
        try {
            const response = await axios.get(`https://gorest.co.in/public-api/posts?user_id=${userId}`);
            this.setState({ selectedUserDetails: response.data.data });
            this.props.history.push('user-details', response.data.data);
            this.props.getUserDetails(response.data.data)
        } catch (e) {
            console.log(e)
        }
    }

    componentDidMount() {
        this.getUserList(1)
    }


    decrease = () => {
        if (startPage > 1) {
            startPage--
            this.getUserList(startPage)
        }
    }

    increase = () => {
        startPage++;
        this.getUserList(startPage)
    }

    render() {
        return (
            <React.Fragment>
                <header className="row">
                    <nav className="col-12 navbar navbar-light">
                        <span className="navbar-brand mb-0 h1">User List</span>
                    </nav>
                </header>

                <div className="row">
                    <table className="table table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Status</th>
                                <th>Created On</th>
                                <th>Updated On</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.userList.map(id => {
                                    return (
                                        <tr key={id.id}>
                                            <td>{id.id}</td>
                                            <td onClick={() => this.viewDetails(id.id)}>
                                                <a href="#">{id.name}</a>
                                            </td>
                                            <td>{id.email}</td>
                                            <td>{id.gender}</td>
                                            <td>{id.status}</td>
                                            <td>{id.created_at}</td>
                                            <td>{id.updated_at}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>

                    <div className="col-12 text-right" style={{backgroundColor: "#535252", padding: "10px"}}>
                        <div className="btn-group">
                            <button className="btn btn-primary btn-sm" onClick={this.decrease}> &lt; </button>
                            <button className="btn btn-primary btn-sm" onClick={this.increase}> &gt; </button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        getUserDetails: (val) => dispatch({ type: 'UserDetails', value: val })
    }
}

export default connect(null, mapDispatchToProps)(userList);