import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import { Link } from 'react-router-dom';
import { Header } from 'react-mdl';
import Icon from '@material-ui/core/Icon';
import Tooltip from '@material-ui/core/Tooltip';

class MainHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }
    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user } = this.props;

        return (
            <Header title="CRM" scroll className="main_header_style">
                <div className="logout_button">
                    <button className ="mdl-button mdl-js-button">
                        {user.firstName + ' ' + user.lastName} &nbsp; 
                        
                        <Tooltip title="Logout" placement="bottom" style={{fontSize: '20px'}}>
                            <Link to="/login" style={{color: '#fff'}}><Icon>exit_to_app</Icon></Link>
                        </Tooltip>
                    </button>
                </div>            
            </Header>
        );
    }
};

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedMainHeader = connect(mapStateToProps)(MainHeader);
export { connectedMainHeader as MainHeader };