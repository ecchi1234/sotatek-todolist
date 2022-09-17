import React from "react";
import "./TodoItem.css";
function TodoItem({ title, onChangeCheckbox, ísChecked, id }) {
  return (
    <div className="todo-item__wrapper">
      <div className="todo-item__checkbox">
        <input type={"checkbox"} value={id} />
        <label>{title}</label>
      </div>
    </div>
  );
}
export default TodoItem;
