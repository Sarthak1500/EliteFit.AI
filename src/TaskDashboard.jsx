import React from 'react';
import { CheckCircle, Edit, Trash2 } from 'lucide-react';

const TaskDashboard = ({
  tasks,
  searchQuery,
  priorityFilter,
  statusFilter,
  deleteTask,
  setEditingTask,
  updateTask
}) => {
  const today = new Date();

  // Filter tasks by priority, status, and search query
  const filteredTasks = tasks.filter(task => {
    return (
      (priorityFilter === 'All' || task.priority === priorityFilter) &&
      (statusFilter === 'All' || task.status === statusFilter) &&
      task.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  // Categorize tasks
  const upcomingTasks = filteredTasks.filter(task => new Date(task.dueDate) > today && task.status !== 'Completed');
  const overdueTasks = filteredTasks.filter(task => new Date(task.dueDate) < today && task.status !== 'Completed');
  const completedTasks = filteredTasks.filter(task => task.status === 'Completed');

  const getPriorityColor = (priority) => {
    const colors = {
      High: 'bg-red-100 text-red-800',
      Medium: 'bg-yellow-100 text-yellow-800',
      Low: 'bg-green-100 text-green-800'
    };
    return colors[priority] || 'bg-gray-100 text-gray-800';
  };

  const getStatusColor = (status) => {
    const colors = {
      Pending: 'bg-yellow-100 text-yellow-800',
      'In Progress': 'bg-blue-100 text-blue-800',
      Completed: 'bg-green-100 text-green-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const handleToggleComplete = (task) => {
    const updatedTask = {
      ...task,
      status: task.status === 'Completed' ? 'Pending' : 'Completed'
    };
    updateTask(updatedTask);
  };

  const renderTaskCards = (tasks) => (
    tasks.map(task => (
      <div
        key={task.id}
        className={`bg-white rounded-lg shadow-md overflow-hidden border
          ${task.status === 'Completed' ? 'border-green-200' : 'border-gray-200'}
          transition-all duration-200 hover:shadow-lg`}
      >
        {/* Card Header */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <h3 className={`font-semibold text-lg ${task.status === 'Completed' ? 'text-gray-500 line-through' : 'text-gray-800'}`}>
              {task.title}
            </h3>
            <button
              onClick={() => handleToggleComplete(task)}
              className={`p-2 rounded-full transition-colors duration-200
                ${task.status === 'Completed' 
                  ? 'text-green-500 hover:bg-green-50' 
                  : 'text-gray-400 hover:bg-gray-50'}`}
            >
              <CheckCircle 
                className={`w-5 h-5 ${task.status === 'Completed' ? 'fill-green-500' : ''}`}
              />
            </button>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-4">
          <p className={`text-gray-600 mb-4 ${task.status === 'Completed' ? 'text-gray-400' : ''}`}>
            {task.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className={`px-3 py-1 rounded-full text-sm ${getPriorityColor(task.priority)}`}>
              {task.priority}
            </span>
            <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(task.status)}`}>
              {task.status}
            </span>
          </div>
        </div>

        {/* Card Footer */}
        <div className="px-4 py-3 bg-gray-50 border-t border-gray-100 flex justify-end space-x-2">
          <button
            onClick={() => setEditingTask(task)}
            className="p-2 text-gray-600 hover:bg-gray-200 rounded-full transition-colors duration-200"
          >
            <Edit className="w-4 h-4" />
          </button>
          <button
            onClick={() => deleteTask(task.id)}
            className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors duration-200"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    ))
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Upcoming Tasks */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Tasks</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {upcomingTasks.length > 0 ? renderTaskCards(upcomingTasks) : <p className="text-gray-500">No upcoming tasks</p>}
      </div>

      {/* Overdue Tasks */}
      <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Overdue Tasks</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {overdueTasks.length > 0 ? renderTaskCards(overdueTasks) : <p className="text-gray-500">No overdue tasks</p>}
      </div>

      {/* Completed Tasks */}
      <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Completed Tasks</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {completedTasks.length > 0 ? renderTaskCards(completedTasks) : <p className="text-gray-500">No completed tasks</p>}
      </div>
    </div>
  );
};

export default TaskDashboard;
