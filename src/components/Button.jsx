import React from "react";
import "./button.css";

const Button = ({ children, color = "default" }) => {
  return (
    <div>
      <button className={color}>{children}</button>
    </div>
  );
};

export default Button;
