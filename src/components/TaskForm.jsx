import { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState({
    name: "",
    description: "",
    completed: false,
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.name || !task.description) {
      setError("Both name and description are required");
      return;
    }
    addTask({ ...task, id: Date.now() });
    setTask({ name: "", description: "", completed: false });
    setError("");
  };

  return (
    <div className="task-form">
      <h2>Add a new task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={task.name}
          onChange={handleChange}
          placeholder="Task name"
          required
        />
        <input
          type="text"
          name="description"
          value={task.description}
          onChange={handleChange}
          placeholder="Task description"
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
