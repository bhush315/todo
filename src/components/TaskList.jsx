import TaskItem from "./TaskItem";

const TaskList = ({ tasks, updateTask, deleteTask, toggleTaskCompletion }) => {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            updateTask={updateTask}
            deleteTask={deleteTask}
            toggleTaskCompletion={toggleTaskCompletion}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
