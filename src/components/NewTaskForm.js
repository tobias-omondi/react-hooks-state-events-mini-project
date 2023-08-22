import React, { useState } from "react";
import React from "react";


function NewTaskForm(props) {
  const { categories, onTaskFormSubmit } = props;
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = { text: text, category: category };
    onTaskFormSubmit(newTask);
    setText("");
    setCategory("");
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleTextChange} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleCategoryChange}>
          {categories.map((category) => (
            category !== "All" && <option key={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

