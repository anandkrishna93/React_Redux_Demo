import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={props => (
        true ?
            <React.Fragment>
                <div className="container-fluid">
                    <header className="row">
                        <nav className="col-12 navbar navbar-light bg-primary">
                            <span className="navbar-brand mb-0 h1">Meeting Room</span>
                        </nav>
                    </header>

                    <section style={{margin: "20px 0px"}}>
                        <Component {...props} />
                    </section>
                </div>
            </React.Fragment>
            : <Redirect to='/' />
    )} />
}