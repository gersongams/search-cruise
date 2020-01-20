import React from "react";

const Button = ({ value, checked, handler }) => (
  <div className={checked ? "option option--checked" : "option"}>
    <label>
      <input
        name={value}
        checked={checked}
        onChange={handler}
        type="checkbox"
      />
      {value}
    </label>
  </div>
);

export default Button;
