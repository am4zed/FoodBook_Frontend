import React from 'react';
import Searchbar from "../Searchbar/Searchbar"
import { withRouter } from "react-router-dom"

const Discover = (props) => {

    // const recipes = props.recipes.map(() => {
    //     return <div>This is a recipe card</div>
    // })

    return (
        <div>
            <Searchbar onSubmit={props.onSubmit} />
            <div className="this-will-be-a-flex-box">
                {/* {recipes} */}
            </div>
        </div>
    )
};

export default withRouter(Discover);
