
import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import { withRouter } from "react-router-dom";
import DiscoveryGrid from "../DiscoveryGrid/DiscoveryGrid";
import Searching from "../Searching/Searching";

const Discover = props => {


  return (
    <div>
      <Searchbar onSubmit={props.onSubmit} />
      {props.searching ? <Searching /> : <DiscoveryGrid
        hits={props.hits}
        onClick={props.onClick}
        onFavouriteClick={props.onFavouriteClick}
      />}
    </div>
  );
};

export default withRouter(Discover);
