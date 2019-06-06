import React from "react";
import { withRouter } from "react-router-dom";

const Callback = (props) => {
  props.auth.handleAuthentication().then(() => {
    props.history.push("/");
  }).catch(() => {
    return <div>Error logging in!</div>
  });
  return <div>Validating Session...</div>;
}


export default withRouter(Callback);
