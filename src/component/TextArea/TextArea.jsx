import React from "react";
import "./TextArea.css";
function TextArea({ title, value, onChange }) {
  return (
    <div className="text-area__wrapper">
      <label>{title}</label>
      <textarea value={value} onChange={onChange} />
    </div>
  );
}

export default TextArea;
