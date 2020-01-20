import React from "react";

const MenuItem = ({ value, action, selected }) => {
  const classes = ["menu--item"];
  if (selected) classes.push("menu--item__selected");
  return (
    <div className={classes.join(" ")} onClick={() => action(value)}>
      {value}
    </div>
  );
};

export default MenuItem;
