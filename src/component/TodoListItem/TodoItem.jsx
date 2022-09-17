import React from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import Button from "../Button/Button";
import InputText from "../InputText/InputText";
import InputSelect from "../InputSelect/InputSelect";
import TextArea from "../TextArea/TextArea";
import DatePicker from "../DatePicker/DatePicker";
import { listPriorityOption } from "../../config/const";
import "./TodoItem.css";
function TodoItem({
  taskItem,
  handleDeleteTaskItem,
  onChange,
  handleUpdateTask,
}) {
  const [isVisibleUpdateForm, setIsVisibleUpdateForm] = React.useState(false);
  const handleToggleUpdateForm = useCallback(() => {
    setIsVisibleUpdateForm(!isVisibleUpdateForm);
  }, [isVisibleUpdateForm]);
  const [currentTaskItem, setCurrentTaskItem] = React.useState();
  useEffect(() => {
    if (taskItem) {
      setCurrentTaskItem(taskItem);
    }
  }, [taskItem]);
  const handleChangeField = useCallback(
    (field) => (event) => {
      const newTaskItem = { ...currentTaskItem, [field]: event.target.value };
      setCurrentTaskItem(newTaskItem);
    },
    [currentTaskItem]
  );
  return (
    <>
      <div className="todo-item__wrapper">
        <div className="todo-item__container">
          <div className="todo-item__checkbox">
            <input type={"checkbox"} value={taskItem?.id} onChange={onChange} />
            <label>{taskItem?.taskTitle}</label>
          </div>

          <div className="todo-item__action">
            <div>
              <Button
                label={"Detail"}
                className="button-update"
                onClick={handleToggleUpdateForm}
              />
            </div>

            <div>
              <Button
                label={"Remove"}
                className="button-remove"
                onClick={() => handleDeleteTaskItem(taskItem.id)}
              />
            </div>
          </div>
        </div>
        {isVisibleUpdateForm && (
          <div className="todo-item__update-form">
            <div className="page-detail__content">
              <div className="m--lg">
                <InputText
                  title={""}
                  placeholder={"Add new task..."}
                  value={currentTaskItem?.taskTitle}
                  onChange={handleChangeField("taskTitle")}
                />
              </div>

              <div className="m--lg">
                <TextArea
                  title={"Description"}
                  value={currentTaskItem?.taskDescription}
                  onChange={handleChangeField("taskDescription")}
                />
              </div>

              <div className="m--lg flex-box-layout">
                <DatePicker
                  title={"Due Date"}
                  value={currentTaskItem?.dueDate}
                  onChange={handleChangeField("dueDate")}
                />

                <InputSelect
                  title={"Priority"}
                  listOption={listPriorityOption}
                  value={currentTaskItem?.priority}
                  onChange={handleChangeField("priority")}
                  field={"priority"}
                />
              </div>

              <div className="m--lg flex-box-layout">
                <Button
                  label={"Update"}
                  onClick={() => handleUpdateTask(currentTaskItem)}
                  className="add-button"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default TodoItem;
