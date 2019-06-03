import React from "react"

class Searchbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ingredient: null
    }

    handleSubmit(evt){
      evt.preventDefault()
      const ingredient = this.state.ingredient;
      this.setState({
        ingredient: ingredient
      });
    };

    handleIngredientChange(evt) {
      this.setState({
        ingredient:evt.target.value
      });
    }

  }

    render() {
        return (
          //Searchbar
          <form className="recipe-search" onSubmit={this.handleSubmit}>
          <h3>Search for recipes that include your ingredient.</h3>
            <input
              id="input-ingredient"
              name="input-ingredient"
              type="text"
              onChange={this.handleIngredientChange}
              value={this.state.ingredient}
            />

            <input type="submit" value="Search"/>
          </form>
        )
    }

}

export default Searchbar;
