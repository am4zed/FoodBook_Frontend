import React from 'react';
import './App.css';
import { withRouter, Route } from "react-router-dom"
import Callback from "./components/Callback/Callback"


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
    if (this.props.location.pathname === "/callback") return;
    try {
      await this.props.auth.silentAuth();
      this.forceUpdate(); // Make sure to force a rerender, incase you're wondering what this does
    } catch (err) {
      if (err.error !== 'login_required') console.log(err.error);

    }

    render() {
      const authenticated = this.props.auth.isAuthenticated();
      return (
        <div>
          <Route path="/callback" render={() => <Callback auth={this.props.auth} />} />
          <Route
            exact
            path="/"
            render={() => (
              <Homepage
                authenticated={authenticated}
                auth={this.props.auth}
                history={this.props.history}
              />
            )}
          />
        </div>
      );
    }
  }

  export default withRouter(App);
