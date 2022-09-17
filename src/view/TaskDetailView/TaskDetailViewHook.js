import { useCallback, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { LOCAL_STORAGE_KEY } from "../../config/const";
function useTaskDetailViewHook(
  currentListTask,
  setCurrentListTask,
  currentTask
) {
  const [taskItem, setTaskItem] = useState({
    taskTitle: "",
    taskDescription: "",
    dueDate: "",
    priority: 2,
    id: "",
  });

  useEffect(() => {
    if (currentTask) {
      setTaskItem(currentTask);
    }
  }, [currentTask]);

  const handleAddNewTask = useCallback(
    (newTask) => {
      const newListTask = [...currentListTask, { ...newTask, id: uuidv4() }];
      setCurrentListTask(newListTask);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newListTask));
      setTaskItem({
        taskTitle: "",
        taskDescription: "",
        dueDate: "",
        priority: 2,
        id: "",
      });
    },
    [currentListTask, setCurrentListTask]
  );

  const handleChangeField = useCallback(
    (field) => (event) => {
      const newTask = { ...taskItem, [field]: event.target.value };
      setTaskItem(newTask);
    },
    [taskItem]
  );

  return {
    handleAddNewTask,
    taskItem,
    setTaskItem,
    handleChangeField,
  };
}
export default useTaskDetailViewHook;
