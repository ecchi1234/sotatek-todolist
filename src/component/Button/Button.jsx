import React from "react";
import "./Button.css";
function Button({ className, label, width }) {
  return (
    <div className={`button__wrapper ${className}`}>
      <button width={width}>{label}</button>
    </div>
  );
}
export default Button;
