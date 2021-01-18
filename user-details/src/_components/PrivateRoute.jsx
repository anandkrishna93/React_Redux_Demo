import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={props => (
        true ?
            <React.Fragment>
                <div className="container-fluid">
                    <Component {...props} />
                </div>
            </React.Fragment>
            : <Redirect to='/' />
    )} />
}