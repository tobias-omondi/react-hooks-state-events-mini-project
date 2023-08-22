import React from "react";
import Task from "./Task";

function TaskList(props) {
  const { tasks } = props;

  const handleDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task
          key={task.id}
          category={task.category}
          text={task.text}
          onDelete={() => handleDelete(task.id)}
        />
      ))}
    </div>
  );
}

export default TaskList;
