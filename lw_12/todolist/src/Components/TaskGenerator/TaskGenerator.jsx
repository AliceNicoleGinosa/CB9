import { useState } from "react";
import { nanoid } from "nanoid";
import "./TaskGenerator.css";
const TaskGenerator = ({ tasks = [], setTask = () => {}, children }) => {
  const [taskValue, setTaskValue] = useState("");

  return (
    <form className="generator-container">
      {children}
      <input
        className="input-text"
        type="text"
        placeholder="Write your activities"
        onChange={(e) => setTaskValue(e.target.value)}
        onClick={(e) => (e.target.value = "")}
      />
      <button
        className="input-button"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          setTask([...tasks, { id: nanoid(), text: taskValue }]);
        }}
      >
        Add to the list!
      </button>
    </form>
  );
};

export default TaskGenerator;
