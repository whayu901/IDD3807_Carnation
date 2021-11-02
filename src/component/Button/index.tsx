import React from "react";

import "./styles.scss";

interface Props {
  isOutlined?: boolean;
  textBtn: string;
  onClick?: () => void;
  type?: any
}

const Button = ({ isOutlined = false, textBtn, onClick, type }: Props) => {
  return (
    <button
      type={type}
      className={`button shadow ${isOutlined ? "outlined" : ""}`}
      onClick={onClick}
    >
      {textBtn}
    </button>
  );
};

export default Button;
