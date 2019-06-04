import React from 'react';
import Logo from '../Logo/Logo.js';
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      < Logo className="logo" />
      <div><button className="my_recipes">My Recipes</button>
      </div>
    </div>
  )};

export default Header;
