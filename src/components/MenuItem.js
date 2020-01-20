import React from "react";

const MenuItem = ({ value, action }) => {
  return (
    <div className="menu--item" onClick={() => action(value)}>
      {value}
    </div>
  );
};

export default MenuItem;
