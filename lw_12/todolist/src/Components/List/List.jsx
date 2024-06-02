import Task from "../Task/Task.jsx";
import "./List.css";
const List = ({ tasks = [], setTask }) => {
  const HandleDeleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };
  return (
    <ul className="list">
      {tasks.map((task, index) => (
        <Task
          key={index}
          text={task.text}
          handleClick={() => {
            HandleDeleteTask(task.id);
          }}
        />
      ))}
    </ul>
  );
};

export default List;
