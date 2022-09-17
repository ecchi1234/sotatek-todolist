import React from "react";
import "./DatePicker.css";
function DatePicker({ onChange, value, title, placeholder, formatDate }) {
  return (
    <div className="date-picker__wrapper">
      <div className="title">{title}</div>
      <input
        type="date"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        forma
      ></input>
    </div>
  );
}

export default DatePicker;
