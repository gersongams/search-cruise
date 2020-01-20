import React from "react";

const Card = ({ children, className }) => {
  let classNames = "card";
  if (className) {
    classNames = classNames + " " + className;
  }
  return <div className={classNames}>{children}</div>;
};

export default Card;
