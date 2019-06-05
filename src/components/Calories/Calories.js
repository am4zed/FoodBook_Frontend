import React from "react";
import "./style.css"

const Calories = props => (
  <>
    <h4 className="recipe-calories">Calories : {Math.round(props.calories)}</h4>
  </>
);
export default Calories;
