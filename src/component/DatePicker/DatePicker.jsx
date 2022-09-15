import React from "react";
import "./DatePicker.css";
function DatePicker({ onChange, value, title, placeholder, formatDate }) {
  return (
    <div className="date-picker__wrapper">
      <label>{title}</label>
      <input
        type="date"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      ></input>
    </div>
  );
}

export default DatePicker;
