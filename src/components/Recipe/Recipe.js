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

// <img - image of the dish for the recipe/>;//Float left
// <div>Ingredients</div>;//Float right
// <div>Methods</div>;// Positioned underneath ingredients
// <div>Reviews</div>;// Positioned bottom of the page
