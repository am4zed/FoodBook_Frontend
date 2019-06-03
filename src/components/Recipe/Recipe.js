import React from 'react';
import './recipe.css';
import Ingredient from '../Ingredient';
import Method from '../Method';

const Recipe = (props) => {

  return (
    <>
      <h1>{props.recipeName}</h1>
      <h2>Ingredients :</h2>
      <Ingredient />
      <h2>Methods :</h2>
      <Method />
    </>
  );

};
export default Recipe;
