import React from "react";
import "./InputSelect.css";
function InputSelect({
  onChange,
  value,
  title,
  placeholder,
  listOption,
  field,
}) {
  return (
    <div className="input-select__wrapper">
      <label>{title}</label>
      <select
        name={field}
        id={field}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      >
        {listOption &&
          listOption.length > 0 &&
          listOption.map((optionItem) => {
            return <option value={optionItem.value}>{optionItem.name}</option>;
          })}
      </select>
    </div>
  );
}
export default InputSelect;
