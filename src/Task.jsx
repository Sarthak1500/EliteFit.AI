import React from 'react';

const Task = ({ task, deleteTask, setEditingTask }) => (
  <div className="task">
    <h3>{task.title}</h3>
    <p>{task.description}</p>
    <p>Due Date: {task.dueDate}</p>
    <p>Priority: {task.priority}</p>
    <button onClick={() => setEditingTask(task)}>Edit</button>
    <button onClick={() => deleteTask(task.id)}>Delete</button>
  </div>
);

export default Task;
