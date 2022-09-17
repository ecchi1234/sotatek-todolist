import React from "react";
import { v4 as uuidv4 } from "uuid";
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
      <div className="title">{title}</div>
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
            return (
              <option value={optionItem.id} key={uuidv4()}>
                {optionItem.name}
              </option>
            );
          })}
      </select>
    </div>
  );
}
export default InputSelect;
