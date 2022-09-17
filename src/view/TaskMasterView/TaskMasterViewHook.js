import { useMemo } from "react";
import { useCallback, useEffect, useState } from "react";
import { LOCAL_STORAGE_KEY } from "../../config/const";
import _ from "lodash";
function useTaskMasterHook() {
  const [listTask, setListTask] = useState([]);
  const [searchValue, setSearchValue] = useState();
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const [isVisibleBulkAction, setIsVisibleBulkAction] = useState(false);
  const [selectedTasks, setSelectedTasks] = useState([]);
  useEffect(() => {
    if (selectedTasks && selectedTasks.length > 0) {
      setIsVisibleBulkAction(true);
    } else {
      setIsVisibleBulkAction(false);
    }
  }, [selectedTasks]);
  useEffect(() => {
    if (localStorage.getItem(LOCAL_STORAGE_KEY)) {
      setListTask(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
    } else {
      setListTask([]);
    }
  }, []);

  // filter task by task title
  const handleSearchTask = useCallback((searchValue) => {
    const listSearchTarget = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (searchValue.target.value) {
      const filteredListTask = listSearchTarget.filter(
        (taskItem) => taskItem?.taskTitle === searchValue.target.value
      );

      setListTask(filteredListTask);
    } else {
      setListTask(listSearchTarget);
    }

    setSearchValue(searchValue.target.value);
  }, []);

  // delete single task
  const handleDeleteSingleTask = useCallback(
    (taskId) => {
      const newListTask = listTask.filter(
        (taskItem) => taskItem?.id !== taskId
      );
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newListTask));
      setListTask(newListTask);
    },
    [listTask]
  );

  // bulk delete task
  const handleDeleteMultipleTask = useCallback(
    (listTaskId) => {
      const newListTask = listTask.filter(
        (taskItem) => !listTaskId.includes(taskItem.id)
      );
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newListTask));
      setListTask(newListTask);
      setIsVisibleBulkAction(false);
    },
    [listTask]
  );

  // change checkbox of item
  const handleChangeCheckbox = useCallback(
    (event) => {
      if (event.target.value && event.target.checked) {
        setSelectedTasks([...selectedTasks, event.target.value]);
      } else {
        const newListSelectedTasks = selectedTasks.filter(
          (item) => item !== event.target.value
        );
        setSelectedTasks(newListSelectedTasks);
      }
    },
    [selectedTasks]
  );

  // update task
  const handleUpdateTask = useCallback(
    (updatedTask) => {
      const taskIndex = listTask.findIndex(
        (task) => task.id === updatedTask.id
      );
      listTask[taskIndex] = updatedTask;
      const newListTask = [...listTask];
      setListTask(newListTask);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newListTask));
    },
    [listTask]
  );

  // sorted list task
  const sortedListTask = useMemo(() => {
    return _.sortBy(listTask, (o) => new Date(o.dueDate));
  }, [listTask]);
  return {
    listTask,
    setListTask,
    isVisibleModal,
    setIsVisibleModal,
    handleSearchTask,
    handleDeleteMultipleTask,
    handleDeleteSingleTask,
    searchValue,
    isVisibleBulkAction,
    setIsVisibleBulkAction,
    setSelectedTasks,
    handleChangeCheckbox,
    selectedTasks,
    handleUpdateTask,
    sortedListTask,
  };
}
export default useTaskMasterHook;
