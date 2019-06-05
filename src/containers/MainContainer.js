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
            user: null,
            result: [],
            favourites: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onRecipeCardClick = this.onRecipeCardClick.bind(this);
        this.handleFavouriteClick = this.handleFavouriteClick.bind(this);
        this.syncUserWithDatabase = this.syncUserWithDatabase.bind(this);
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

    async componentDidMount() {
        if (this.props.location.pathname === "/callback")
            this.setState({ validatingSession: false });
        try {
            await this.props.auth.silentAuth()
                .then(() => {
                    this.syncUserWithDatabase();
                });
            this.forceUpdate(); // Make sure to force a rerender, incase you're wondering what this does
        } catch (err) {
            if (err.error !== "login_required") console.log(err.error);
        }
        this.setState({ validatingSession: false });
    }

    logout = () => {
        this.props.auth.logout();
        this.forceUpdate();
    }

    async syncUserWithDatabase() {
        const { auth } = this.props;
        const profile = auth.getProfile();
        const userData = {
            firstName: profile.given_name,
            lastName: profile.family_name,
            id: profile.sub
        }
        await fetch("http://localhost:8080/users/", {
            mode: "cors", // no-cors, cors, *same-origin
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000"
            },
            body: JSON.stringify(userData)
        })
            .then((res) => res.json())
            .then((res) => {
                this.setState({ user: res })
                this.getFavouriteRecipes()
            })
            .catch((err) => console.log(err));
    }

    getFavouriteRecipes = () => {
        fetch(`http://localhost:8080/users/${this.props.auth.getProfile().sub}/favourite-recipes`, {
            mode: "cors", // no-cors, cors, *same-origin
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000"
            }
        })
            .then((res) => res.json())
            .then((res) => {
                this.setState({ favourites: res.user.favouriteRecipes })
                console.log(res);

            }).catch((err) => {

            })
    }

    handleFavouriteClick(recipe) {
        const { auth } = this.props;
        if (!auth.isAuthenticated()) return;
        const { favourites } = this.state;
        let toDelete = null;
        for (let x = 0; x < favourites.length; x++)
            if (recipe.uri === favourites[x].recipeUri)
                toDelete = favourites[x];

        const uris = this.state.favourites.map((fav) => fav.recipeUri);
        if (toDelete) this.deleteFavouriteRecipe(toDelete);
        else this.addFavouriteRecipe(recipe);

    }

    deleteFavouriteRecipe = (recipe) => {
        console.log("delete recipe", recipe);
        fetch(`http://localhost:8080/favorite-recipes/delete/${recipe.id}`, {
            mode: "cors", // no-cors, cors, *same-origin
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000"
            }
        })
            .then(() => {
                const favs = this.state.favourites.filter((fav) => {
                    return fav.recipeUri === recipe.uri
                })
                this.setState({ favourites: favs })
            })
            .catch((err) => console.log(err))

    }

    addFavouriteRecipe = (recipe) => {
        console.log("add recipe");

        const recipeData = {
            recipeUri: recipe.uri,
            name: recipe.label,
            user: this.state.user._links.user.href
        }
        fetch(`http://localhost:8080/favouriteRecipes/`, {
            mode: "cors", // no-cors, cors, *same-origin
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000"
            },
            body: JSON.stringify(recipeData)
        })
            .then((res) => res.json())
            .then((res) => {
                const favs = [...this.state.favourites];
                favs.push(res);
                this.setState({ favourites: favs })
            })
            .catch((err) => console.log(err))
    }

    render() {
        const { result, currentRecipe, favourites } = this.state;
        const { auth } = this.props;
        return (
            <>
                <Header auth={this.props.auth} logout={this.logout} />
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
                    render={() => <RecipeBox auth={auth} currentRecipe={currentRecipe} favourites={favourites} onFavouriteClick={this.handleFavouriteClick} />}
                />
            </>
        );
    }
}

export default withRouter(MainContainer);
