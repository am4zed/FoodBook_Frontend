import React from 'react';
import './App.css';
import { withRouter, Route } from "react-router-dom"
import Callback from "./components/Callback/Callback"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      validatingSession: true
    }
  }

  async componentDidMount() {
    if (this.props.location.pathname === "/callback")
      this.setState({ validatingSession: false })
    try {
      await this.props.auth.silentAuth();
      this.forceUpdate(); // Make sure to force a rerender, incase you're wondering what this does
    } catch (err) {
      if (err.error !== 'login_required') console.log(err.error);
    }
    this.setState({ validatingSession: false })
  }

  render() {
    return (
      <div>
        <Route path="/callback" render={() => <Callback auth={this.props.auth} />} />
        <h1>Hello from Foodbook!</h1>
      </div>
    );
  }
}

export default withRouter(App);
