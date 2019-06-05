import React from "react";
import Button from "../Button/Button";

const FavouriteButton = props => {
  return (
    <>
      <Button
        className="favourite"
        value=""
        onClick={() => {
          props.onFavouriteClick(props.recipe);
        }}
      />
      <img src ="img/heart-icon.png"/>
    </>
  );
};

export default FavouriteButton;
