import React from 'react';
import Callback from "../components/Callback/Callback";
import Header from "../components/Header/Header"
import Homepage from "../components/Homepage/Homepage"
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';


class MainContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            validatingSession: true,
            currentRecipe: null,
            recipes: []
        }
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
            <Router>
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
            </Router>
        )
    }
}

export default withRouter(MainContainer);
