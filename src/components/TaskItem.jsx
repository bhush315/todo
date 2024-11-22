import { useState } from "react";

const TaskItem = ({ task, updateTask, deleteTask, toggleTaskCompletion }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleToggleCompletion = () => {
    toggleTaskCompletion(task.id);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    updateTask(editedTask);
    setIsEditing(false);
  };

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      {isEditing ? (
        <form onSubmit={handleEditSubmit}>
          <input
            type="text"
            name="name"
            value={editedTask.name}
            onChange={handleEditChange}
            required
          />
          <input
            type="text"
            name="description"
            value={editedTask.description}
            onChange={handleEditChange}
            required
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <div>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <button onClick={handleToggleCompletion}>
            {task.completed ? "Mark as Incomplete" : "Mark as Completed"}
          </button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
