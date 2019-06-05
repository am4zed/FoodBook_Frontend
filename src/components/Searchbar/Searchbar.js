import React from "react";
import "./searchbar.css";

class Searchbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        }
    }

    onSubmit = (evt) => {
        evt.preventDefault()
        this.props.onSubmit(this.state.value);
        this.setState({ value: "" })


    };

    onChange = (evt) => {
        this.setState({
            value: evt.target.value
        });
    };

    render() {
        return (
            //Searchbar
            <form className="recipe-search" onSubmit={(evt) => this.onSubmit(evt)}>
                <h3>Discover.</h3>
                <input
                    id="input-ingredient"
                    name="input-ingredient"
                    type="text"
                    onChange={(evt) => this.onChange(evt)}
                    value={this.state.ingredient}
                />

            </form>
        )
    }

}

export default Searchbar;
