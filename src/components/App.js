import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [displayedTasks, setDisplayedTasks] = useState(TASKS);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);

    if (category === "All") {
      setDisplayedTasks(TASKS);
    } else {
      const filteredTasks = TASKS.filter(task => task.category === category);
      setDisplayedTasks(filteredTasks);
    }
  };

  const handleTaskDelete = (taskId) => {
    const updatedTasks = displayedTasks.filter(task => task.id !== taskId);
    setDisplayedTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={[...CATEGORIES, "All"]}
        selectedCategory={selectedCategory}
        onCategoryClick={handleCategoryClick}
      />
      <NewTaskForm />
      <TaskList tasks={displayedTasks} onTaskDelete={handleTaskDelete} />
    </div>
  );
}

export default App;
