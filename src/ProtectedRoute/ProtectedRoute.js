import React, { Component } from "react"
import { Route } from "react-router-dom"

const ProtectedRoute = (props) => {
    const { component: Component, path, validatingSession } = props
    return (
        <Route path={path} render={() => {
            if (validatingSession) return <h3 className="text-center">Style me. This is validating session</h3>;
            return <Component />
        }} />
    );
}

export default ProtectedRoute;