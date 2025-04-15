import React from "react";

const TodoList = () => {
  const [task, setTask] = React.useState([]);

  const handleClick = () => setTask([...task, "completed"]);

  return (
    <div>
      {task.map((t) => (
        <li key={Math.random()}>{t}</li>
      ))}

      <button onClick={handleClick}>Add a task to the list</button>
    </div>
  );
};
export default TodoList;
