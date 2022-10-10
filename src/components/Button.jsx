import React from "react";
import "./button.css";

const Button = ({ children, color = "default", size = "base" }) => {
  return (
    <div>
      <button className={`${color} ${size}`}>{children}</button>
    </div>
  );
};

export default Button;
