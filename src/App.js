import React from "react";
import MainContainer from "./containers/MainContainer";
import "./App.css";
import { withRouter, Route } from "react-router-dom";
import Callback from "./components/Callback/Callback";
import Header from "./components/Header/Header"
import Homepage from "./components/Homepage/Homepage"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validatingSession: true
    };
  }

  async componentDidMount() {
    if (this.props.location.pathname === "/callback")
      this.setState({ validatingSession: false });
    try {
      await this.props.auth.silentAuth();
      this.forceUpdate(); // Make sure to force a rerender, incase you're wondering what this does
    } catch (err) {
      if (err.error !== "login_required") console.log(err.error);
    }
    this.setState({ validatingSession: false });
  }

  render() {
    return (
      <div>
        <Header />
        <Route
          path="/callback"
          render={() => <Callback auth={this.props.auth} />}
        />
        <Route
          exact path="/"
          component={Homepage}
        />
        <Route
          path="/recipe"
        />
      </div>
    );
  }
}

export default withRouter(App);
