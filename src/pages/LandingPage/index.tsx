import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { LinearProgress } from "@material-ui/core";

import "./styles.scss";

const LandingPage = () => {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push(localStorage.getItem("token") ? "dashboard" : "login");
    }, 1000);
  }, [history]);
  return (
    <div>
      <LinearProgress />
    </div>
  );
};

export default LandingPage;
