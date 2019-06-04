<<<<<<< HEAD
import React from 'react';
import Searchbar from "../Searchbar/Searchbar"
import { withRouter } from "react-router-dom"

const Discover = (props) => {

    const recipes = props.recipes.map(() => {
        return <div>This is a recipe card</div>
    })

    return (
        <div>
            <Searchbar onSubmit={props.onSubmit} />
            <div className="this-will-be-a-flex-box">
                {/* {recipes} */}
            </div>
        </div>
    )
=======
import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import { withRouter } from "react-router-dom";
import DiscoveryGrid from "../DiscoveryGrid/DiscoveryGrid";

const Discover = props => {
  return (
    <div>
      <Searchbar onSubmit={props.onSubmit} />
      <DiscoveryGrid hits={props.hits} />
    </div>
  );
>>>>>>> 218faeca375045dc1eb3c3f94026b5a27f6588fd
};

export default withRouter(Discover);
