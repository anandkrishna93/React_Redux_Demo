import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { PrivateRoute } from './_components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './_pages/login';
import Building from './_pages/building';
import AddMeeting from './_pages/addMeeting';

function AuthenticateRoute({ component: Component, authenticated, authSuccessUrl, ...rest }) {
  return <Route exact render={props => (true ? <Redirect to={authSuccessUrl} /> : <Component {...props} />)} {...rest} />;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <AuthenticateRoute exact path='/' component={Login} authSuccessUrl="/building" />
          <PrivateRoute path="/building" component={Building} />
          <PrivateRoute path="/addMeeting" component={AddMeeting} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
