import React from 'react';
import Searchbar from '../Searchbar/Searchbar';
import './style.css';

const FindRecipe = () => {
  return(
    <>
      <h1>Welcome to Foodbook.</h1>;
      <h3>Search for recipes that include your ingredient.</h3>;
      <Searchbar />
    </>
  )
}

export default FindRecipe;
