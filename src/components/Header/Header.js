import React from 'react';
import Logo from '../Logo/Logo.js';
import Button from "../Button/Button"
import Username from "../Username/Username"
import "./header.css";

const Header = (props) => {
  const { auth } = props;
  const buttonValue = auth.isAuthenticated() ? "Logout" : "Login"

  return (
    <div className="header">
      < Logo className="logo" />
      <div className="login-area">
        <Username auth={auth} />
        <Button className="my_recipes_button" value={buttonValue} onClick={auth.isAuthenticated() ? props.logout : auth.login} />
      </div>
    </div>
  )
};

export default Header;
