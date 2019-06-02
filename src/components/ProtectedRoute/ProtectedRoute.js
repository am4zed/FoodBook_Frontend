import React from "react"
import { Route } from "react-router-dom"

const ProtectedRoute = (props) => {
    const { component: Component, path, validatingSession, render } = props
    return (
        <Route path={path} render={() => {
            if (validatingSession) return <h3 className="text-center">Style me. This is validating session</h3>;
            return Component ? <Component /> : render();
        }} />
    );
}

export default ProtectedRoute;