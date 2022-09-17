import { useCallback, useEffect, useState } from "react";
import { LOCAL_STORAGE_KEY } from "../../config/const";
function useTaskMasterHook() {
  const [listTask, setListTask] = useState([]);
  const [searchValue, setSearchValue] = useState();
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  useEffect(() => {
    if (localStorage.getItem(LOCAL_STORAGE_KEY)) {
      setListTask(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
    } else {
      setListTask([]);
    }
  }, []);

  // filter task by task title
  const handleSearchTask = useCallback(
    (searchValue) => {
      const filteredListTask = listTask.filter(
        (taskItem) => taskItem?.name === searchValue.target.value
      );
      setListTask(filteredListTask);
      setSearchValue(searchValue.target.value);
    },
    [listTask]
  );

  // delete single task
  const handleDeleteSingleTask = useCallback(
    (taskId) => {
      const newListTask = listTask.filter(
        (taskItem) => taskItem?.id !== taskId
      );
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
      setListTask(newListTask);
    },
    [listTask]
  );

  return {
    listTask,
    setListTask,
    isVisibleModal,
    setIsVisibleModal,
    handleSearchTask,
    handleDeleteMultipleTask,
    handleDeleteSingleTask,
    searchValue,
  };
}
export default useTaskMasterHook;
