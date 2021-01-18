import React from 'react';
import { connect } from 'react-redux';

class userDetails extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header className="row">
                    <nav className="col-12 navbar navbar-light">
                        <span className="navbar-brand mb-0 h1">User Details</span>
                    </nav>
                </header>

                <div className="row">
                    <table className="table table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th>User Id</th>
                                <th>Title</th>
                                <th>Body</th>
                                <th>Created On</th>
                                <th>Updated On</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.props.location.state && this.props.location.state.length ? this.props.location.state.map(id => {
                                    return (
                                        <tr key={id.id}>
                                            <td onClick={() => this.viewDetails(id.user_id)}>{id.user_id}</td>
                                            <td>{id.title}</td>
                                            <td>{id.body}</td>
                                            <td>{id.created_at}</td>
                                            <td>{id.updated_at}</td>
                                        </tr>
                                    )
                                }) : <tr><td className="bg-info" colSpan="5">No Data Found</td></tr>
                            }
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        UserDetails: state.UserDetails
    }
};

export default connect(mapStateToProps)(userDetails);