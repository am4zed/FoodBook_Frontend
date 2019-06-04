import React from "react";
import RecipeImage from "../RecipeImage/RecipeImage";
import Calories from "../Calories/Calories";
import PrepTime from "../PrepTime/PrepTime";
import RecipeHealthLabel from "../RecipeHealthLabel/RecipeHealthLabel";

const RecipeInformation = props => {
  <div className="recipe-information">
    <RecipeImage />
    <Calories />
    <PrepTime />
    <RecipeHealthLabel />
  </div>;
};

export default RecipeInformation;
