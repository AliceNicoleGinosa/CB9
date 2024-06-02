import { useState } from "react";
import TaskGenerator from "./Components/TaskGenerator/TaskGenerator.jsx";
import List from "./Components/List/List.jsx";
import "./App.css";

const App = () => {
  const [tasks, setNewTasks] = useState([]);
  return (
    <div className="app-container">
      <h1 className="main-title">Daily Activities</h1>
      <TaskGenerator tasks={tasks} setTask={setNewTasks}>
        <h3 className="subtitle">Write them down</h3>
      </TaskGenerator>
      <section className="list-todos">
        <List tasks={tasks} setTask={setNewTasks} />
      </section>
    </div>
  );
};

export default App;
