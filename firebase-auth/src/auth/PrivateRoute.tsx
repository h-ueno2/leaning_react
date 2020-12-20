import React, { useContext } from "react";
import { Route, RouteProps } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Login from "./Login";

const PrivateRoute = (props: RouteProps) => {
  const { currentUser } = useContext(AuthContext);
  const Component = currentUser ? props.component : Login;

  return <Route props component={Component} />;
};

export default PrivateRoute;
