import React from "react"

class Searchbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        }

    }

    handleIngredientChange(evt) {
        this.setState({
            value: evt.target.value
        });
    }

    render() {
        return (
            //Searchbar
            <form>
                <h3>Search for recipes that include your ingredient.</h3>
                <input
                    id="inputIngredient"
                    name="inputIngredient"
                    type="text"
                    onChange={this.handleIngredientChange}
                    value={this.state.value}
                />

                <input type="submit" value="Search" />
            </form>
        )
    }

}

export default Searchbar;
