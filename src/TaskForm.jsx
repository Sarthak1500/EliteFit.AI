import React, { useState, useEffect } from 'react';

const TaskForm = ({ addTask, updateTask, editingTask, closeForm }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Low');

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setDueDate(editingTask.dueDate);
      setPriority(editingTask.priority);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = { title, description, dueDate, priority, status: 'Pending', id: editingTask?.id || Date.now() };

    editingTask ? updateTask(task) : addTask(task);
    setTitle('');
    setDescription('');
    setDueDate('');
    setPriority('Low');
    closeForm();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-md p-4 mb-4">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-medium">Title</label>
        <input
          type="text"
          id="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 font-medium">Description</label>
        <textarea
          id="description"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="dueDate" className="block text-gray-700 font-medium">Due Date</label>
        <input
          type="date"
          id="dueDate"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="priority" className="block text-gray-700 font-medium">Priority</label>
        <select
          id="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
        >
          <option value="High" className="text-red-500">High</option>
          <option value="Medium" className="text-yellow-500">Medium</option>
          <option value="Low" className="text-green-500">Low</option>
        </select>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mr-2"
        >
          {editingTask ? 'Update Task' : 'Add Task'}
        </button>
        <button
          type="button"
          onClick={closeForm}
          className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default TaskForm;