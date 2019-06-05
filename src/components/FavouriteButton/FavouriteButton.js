import React from "react";
import Button from "../Button/Button";
import "./style.css"

const FavouriteButton = props => {
  return (
    <>
      <Button
        className="favourite"
        value=""
        onClick={() => {
          props.onClick(props.recipe);
        }}
      >
        <img src="../img/heart-icon.png" />
      </Button>
    </>
  );
};

export default FavouriteButton;
