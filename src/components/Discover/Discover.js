<<<<<<< HEAD
import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import { withRouter } from "react-router-dom";
import DiscoveryGrid from "../DiscoveryGrid/DiscoveryGrid";

const Discover = props => {
  return (
    <div>
      <Searchbar onSubmit={props.onSubmit} />
      <DiscoveryGrid recipes={props.recipes} />
    </div>
  );
=======
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
>>>>>>> eda52589cfe489e80b578c1d80a58b8b8faace53
};

export default withRouter(Discover);
