<<<<<<< HEAD
import React from "react";
import SignIn from "../components/SignIn/SignIn";
import CreateRecipe from "../components/CreateRecipe/CreateRecipe";
import FindRecipe from "../components/FindRecipe/FindRecipe";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
=======
import React from 'react';
import Callback from "../components/Callback/Callback";
import Header from "../components/Header/Header"
import Discover from "../components/Discover/Discover"
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import axios from "axios"


class MainContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            validatingSession: true,
            currentRecipe: null,
            recipes: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(query) {
        fetch(`http://localhost:8080/api/search/${query}`,
            {
                mode: 'cors', // no-cors, cors, *same-origin
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': 'http://localhost:3000'
                }
            })
            .then((res) => { return res.json() })
            .then((res) => this.setState({ recipes: res }))
            .catch((err) => console.log(err))

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
        const { recipes } = this.state;
        return (
            <>
                <Header />
                <Route
                    path="/callback"
                    render={() => <Callback auth={this.props.auth} />}
                />
                <Route
                    exact path="/"
                    render={() => <Discover onSubmit={this.handleSubmit} recipes={recipes} />}
                />
                <Route
                    path="/recipe/:id"
                    render={() => <div>Render recipe detail here</div>}
                />
            </>
        )
    }
}

export default withRouter(MainContainer);
>>>>>>> cf86934a80129001ca5554a31c7bb79639b46e09
