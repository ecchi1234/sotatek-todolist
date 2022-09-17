import TaskMasterView from "./view/TaskMasterView/TaskMasterView";
import "./App.css";
function App() {
  return (
    <div className="app">
      <div className="app__title">TodoListApp</div>
      <TaskMasterView />
    </div>
  );
}

export default App;
