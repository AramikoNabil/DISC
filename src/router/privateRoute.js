import React from "react";
import { isLogin } from "../component/utils";
import { useHistory } from "react-router-dom";

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const history = useHistory();
  if (!isLogin() && location.pathname !== `/admin`) {
    history.push("/admin");
    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
