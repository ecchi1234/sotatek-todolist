import React from "react";
import TodoItem from "../../component/TodoListItem/TodoItem";
import useTaskMasterHook from "./TaskMasterViewHook";
import TaskDetailView from "../TaskDetailView/TaskDetailView";
import InputText from "../../component/InputText/InputText";
import Button from "../../component/Button/Button";
import "./TaskMasterView.css";
function TaskMasterView() {
  const {
    sortedListTask,
    setListTask,
    handleSearchTask,
    searchValue,
    handleChangeCheckbox,
    selectedTasks,
    handleDeleteMultipleTask,
    handleDeleteSingleTask,
    isVisibleBulkAction,
    handleUpdateTask,
  } = useTaskMasterHook();
  return (
    <>
      <div className="page-master__wrapper">
        <TaskDetailView
          currentListTask={sortedListTask}
          setCurrentListTask={setListTask}
        />
        <div className="todo-list__container">
          <div className="todo-list__section">
            <div className="section__title">Todo List</div>
            <div className="m-b--xs">
              <InputText
                title={""}
                placeholder={"Search..."}
                onChange={handleSearchTask}
                value={searchValue}
              />
            </div>
            <div className="list__wrapper">
              {sortedListTask &&
                sortedListTask.length > 0 &&
                sortedListTask.map((taskItem) => {
                  return (
                    <TodoItem
                      taskItem={taskItem}
                      onChange={handleChangeCheckbox}
                      key={taskItem?.id}
                      handleDeleteTaskItem={handleDeleteSingleTask}
                      handleUpdateTask={handleUpdateTask}
                    />
                  );
                })}
            </div>
          </div>
          {isVisibleBulkAction && (
            <div className="bulk-action">
              <div>
                <Button label={"Done"} className="button-done" />
              </div>

              <div>
                <Button
                  label={"Remove"}
                  className="button-remove"
                  onClick={() => handleDeleteMultipleTask(selectedTasks)}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default TaskMasterView;
