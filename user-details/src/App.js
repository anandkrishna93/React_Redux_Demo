import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { PrivateRoute } from './_components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './_pages/login';
import UserList from './_pages/userList';
import UserDetails from './_pages/userDetails';

function AuthenticateRoute({ component: Component, authenticated, authSuccessUrl, ...rest }) {
  return <Route exact render={props => (true ? <Redirect to={authSuccessUrl} /> : <Component {...props} />)} {...rest} />;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <AuthenticateRoute exact path='/' component={Login} authSuccessUrl="/user-list" />
          <PrivateRoute path="/user-list" component={UserList} />
          <PrivateRoute path="/user-details" component={UserDetails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;