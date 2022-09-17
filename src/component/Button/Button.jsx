import React from "react";
import "./Button.css";
function Button({ className, label, width, onClick }) {
  return (
    <div className={`button__wrapper ${className}`} onClick={onClick}>
      <button width={width}>{label}</button>
    </div>
  );
}
export default Button;
