import React from "react";
import RecipeImage from "../RecipeImage/RecipeImage";
import Calories from "../Calories/Calories";
import PrepTime from "../PrepTime/PrepTime";
import RecipeHealthLabel from "../RecipeHealthLabel/RecipeHealthLabel";

<<<<<<< HEAD
const RecipeInformation = props => {
  <div className="recipe-information">
    <RecipeImage />
    <Calories />
    <PrepTime />
    <RecipeHealthLabel />
  </div>;
};
=======
const RecipeInformation = (props) => {
  const healthLabels = props.currentRecipe.healthLabels.map((label) => {
    return <RecipeHealthLabel healthLabel={label} />;
  })

  return (
    <div className="recipe-information">
      <RecipeImage />
      <Calories />
      <PrepTime />
      <ul>{healthLabels}</ul>
    </div>
  );
}
>>>>>>> cf86934a80129001ca5554a31c7bb79639b46e09

export default RecipeInformation;
