import React from "react";
import "./TextArea.css";
function TextArea({ title, value, onChange }) {
  return (
    <div className="text-area__wrapper">
      <div className="title">{title}</div>
      <textarea value={value} onChange={onChange} cols={60} rows={6} />
    </div>
  );
}

export default TextArea;
