import React from "react";
import Button from "../components/Button/Button"
import RecipeBox from "../components/RecipeBox/RecipeBox";
import Callback from "../components/Callback/Callback";
import Header from "../components/Header/Header";
import Discover from "../components/Discover/Discover";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    withRouter
} from "react-router-dom";
import axios from "axios";

class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            validatingSession: true,
            currentRecipe: null,
            result: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onRecipeCardClick = this.onRecipeCardClick.bind(this);
        this.handleFavouriteClick = this.handleFavouriteClick.bind(this);
    }

    handleSubmit(query) {
        fetch(`http://localhost:8080/api/search/${query}`, {
            mode: "cors", // no-cors, cors, *same-origin
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000"
            }
        })
            .then(res => {
                return res.json();
            })
            .then(res => this.setState({ result: res }))
            .catch(err => console.log(err));
    }

    onRecipeCardClick(recipe) {
        this.setState({ currentRecipe: recipe });
        this.props.history.push(`/recipe/${recipe.uri}`);
    }

    handleFavouriteClick(recipe) {
        const { auth } = this.props;
        if (!auth.isAuthenticated()) return;
        fetch(`http://localhost:8080/users/${auth.getProfile().sub}`, {
            mode: "cors", // no-cors, cors, *same-origin
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000"
            }
        }).then((res) => {
            if (res.status === "404") {
                const profile = auth.getProfile();
                const userData = {
                    firstName: profile.given_name,
                    lastname: profile.family_name,
                    id: profile.sub
                }
                fetch("http://localhost:8080/users/", {
                    mode: "cors", // no-cors, cors, *same-origin
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "http://localhost:3000"
                    },
                    body: JSON.stringify(userData)
                })
            }
        })
    }

    async componentDidMount() {
        if (this.props.location.pathname === "/callback")
            this.setState({ validatingSession: false });
        try {
            await this.props.auth.silentAuth()
                .then(() => {

                });
            this.forceUpdate(); // Make sure to force a rerender, incase you're wondering what this does
        } catch (err) {
            if (err.error !== "login_required") console.log(err.error);
        }
        this.setState({ validatingSession: false });
    }

    render() {
        const { result, currentRecipe } = this.state;

        return (
            <>
                <Header />
                <Route
                    path="/callback"
                    render={() => <Callback auth={this.props.auth} />}
                />
                <Route
                    exact
                    path="/"
                    render={() => (
                        <Discover
                            onSubmit={this.handleSubmit}
                            hits={result.hits}
                            onClick={this.onRecipeCardClick}
                            onFavouriteClick={this.handleFavouriteClick}
                        />
                    )}
                />
                <Route
                    path="/recipe/:id"
                    render={() => <RecipeBox currentRecipe={currentRecipe} />}
                />
                <Button value="LOGIN" onClick={this.props.auth.login} />
            </>
        );
    }
}

export default withRouter(MainContainer);
