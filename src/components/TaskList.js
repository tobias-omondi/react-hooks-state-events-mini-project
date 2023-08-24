import React from "react";
import Task from "./Task";

function TaskList({ tasks, onTaskDelete }) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task
          key={task.id}
          category={task.category}
          text={task.text}
          onDelete={() => onTaskDelete(task.id)}
        />
      ))}
    </div>
  );
}

export default TaskList;

