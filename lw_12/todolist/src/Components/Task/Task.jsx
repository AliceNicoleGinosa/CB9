import "./Task.css";
const Task = ({ text, handleClick }) => {
  return (
    <div className="task-container" onClick={handleClick}>
      <p className="task">
        <span className="button-close" onClick={handleClick}>
          x
        </span>
        {text}
      </p>
    </div>
  );
};

export default Task;
