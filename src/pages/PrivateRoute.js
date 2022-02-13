import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useUserContext } from "../context/user_context";

const PrivateRoute = ({ children, ...rest }) => {
  console.log(children);
  console.log(rest);
  return <Route>private route</Route>;
};

export default PrivateRoute;
