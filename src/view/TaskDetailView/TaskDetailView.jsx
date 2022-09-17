import React from "react";
import InputText from "../../component/InputText/InputText";
import TextArea from "../../component/TextArea/TextArea";
import DatePicker from "../../component/DatePicker/DatePicker";
import InputSelect from "../../component/InputSelect/InputSelect";
import Button from "../../component/Button/Button";
import useTaskDetailViewHook from "./TaskDetailViewHook";
import { listPriorityOption } from "../../config/const";
import "./TaskDetailView.css";
function TaskDetailView({ currentListTask, setCurrentListTask, currentTask }) {
  const { taskItem, handleChangeField, handleAddNewTask, errorMessage } =
    useTaskDetailViewHook(currentListTask, setCurrentListTask, currentTask);
  return (
    <div className="page-detail__wrapper">
      <div className="page-detail__container">
        <h3 className="title">New Task</h3>
        <div className="page-detail__content">
          <div className="m--lg">
            <InputText
              title={""}
              placeholder={"Add new task..."}
              value={taskItem?.taskTitle}
              onChange={handleChangeField("taskTitle")}
              isRequired={true}
              errorMessage={errorMessage}
            />
          </div>

          <div className="m--lg">
            <TextArea
              title={"Description"}
              value={taskItem?.taskDescription}
              onChange={handleChangeField("taskDescription")}
            />
          </div>

          <div className="m--lg flex-box-layout">
            <DatePicker
              title={"Due Date"}
              value={taskItem?.dueDate}
              onChange={handleChangeField("dueDate")}
            />

            <InputSelect
              title={"Priority"}
              listOption={listPriorityOption}
              value={taskItem?.priority}
              onChange={handleChangeField("priority")}
              field={"priority"}
            />
          </div>

          <div className="m--lg flex-box-layout">
            <Button
              label={"Add"}
              onClick={() => handleAddNewTask(taskItem)}
              className="add-button"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default TaskDetailView;
