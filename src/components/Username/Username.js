import React from 'react';
import "./style.css"

const Username = (props) => {
    const { auth } = props;
    if (auth.isAuthenticated())
        return <div className="username" >{auth.getProfile().name}</div>
    return <div></div>
}

export default Username;