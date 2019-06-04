import React from "react";
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
    console.log("hello");
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
      </>
    );
  }
}

export default withRouter(MainContainer);
