import React from "react";
import { CircularProgress } from "@material-ui/core";

import "./styles.scss";

interface Props {
  titleLoading: string;
}

const Loading = ({ titleLoading }: Props) => {
  return (
    <div id="container-loading">
      <CircularProgress style={{color: "#70A243"}} />
      <p className="regular-text" style={{ textAlign: "center" }}>
        {titleLoading}
      </p>
    </div>
  );
};

export default Loading;
