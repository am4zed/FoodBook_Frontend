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
};

export default withRouter(Discover);
