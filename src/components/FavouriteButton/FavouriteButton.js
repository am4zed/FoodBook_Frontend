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

    </>
  );
};

export default FavouriteButton;
