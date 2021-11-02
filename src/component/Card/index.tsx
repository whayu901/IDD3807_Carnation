import React, { ReactNode, memo } from "react";

import "./styles.scss";

interface Props {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className }: Props) => {
  return <div className={`container-card shadow ${className}`}>{children}</div>;
};

export default memo(Card);
