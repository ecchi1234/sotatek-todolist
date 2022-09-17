import React from "react";
import "./InputText.css";
function InputText({
  onChange,
  value,
  title,
  placeholder,
  isRequired,
  errorMessage,
}) {
  return (
    <div className="input-text__wrapper">
      <div className="title">{title}</div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        isRequired={isRequired}
      ></input>
      <div>{errorMessage}</div>
    </div>
  );
}

export default InputText;
