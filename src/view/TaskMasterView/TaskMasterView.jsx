import React from "react";
import TodoItem from "../../component/TodoListItem/TodoItem";
import useTaskMasterHook from "./TaskMasterViewHook";
import TaskDetailView from "../TaskDetailView/TaskDetailView";
import InputText from "../../component/InputText/InputText";
import "./TaskMasterView.css";
function TaskMasterView() {
  const { listTask, setListTask, handleSearchTask, searchValue } =
    useTaskMasterHook();
  return (
    <div className="page-master__wrapper">
      <TaskDetailView
        currentListTask={listTask}
        setCurrentListTask={setListTask}
      />
      <div>
        <h3>Todo List</h3>
        <div>
          <InputText
            title={""}
            placeholder={"Search..."}
            onChange={handleSearchTask}
            value={searchValue}
          />
        </div>
        <div className="list__wrapper">
          {listTask &&
            listTask.length > 0 &&
            listTask.map((taskItem) => {
              return (
                <TodoItem
                  title={taskItem?.taskTitle}
                  key={taskItem?.id}
                  id={taskItem?.id}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
export default TaskMasterView;
