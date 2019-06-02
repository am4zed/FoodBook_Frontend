import React from 'react';
import './App.css';
import { withRouter, Route } from "react-router-dom"
import Callback from "./components/Callback/Callback"
import auth from "./Auth/Auth"


const Homepage = props => {
  const { authenticated } = props;

  const logout = () => {
    props.auth.logout();
    props.history.push("/");
  };

  if (authenticated) {
    const { name } = props.auth.getProfile();
    console.log(props.auth.getProfile());

    return (
      <div>
        <h1>Hi there, {name}</h1>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Please login to continue</h1>
      <button onClick={props.auth.login}>Login</button>
    </div>
  );
};

class App extends React.Component {

  async componentDidMount() {

  }

  render() {
    const authenticated = props.auth.isAuthenticated();
    return (
      <div>
        <Route path="/callback" render={() => <Callback auth={props.auth} />} />
        <Route
          exact
          path="/"
          render={() => (
            <Homepage
              authenticated={authenticated}
              auth={props.auth}
              history={props.history}
            />
          )}
        />
      </div>
    );
  }
}

export default withRouter(App);
