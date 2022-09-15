import React from "react";
import "./InputText.css";
function InputText({ onBlur, value, title, placeholder }) {
  return (
    <div className="input-text__wrapper">
      <label>{title}</label>
      <input
        type="text"
        value={value}
        onBlur={onBlur}
        placeholder={placeholder}
      ></input>
    </div>
  );
}

export default InputText;
