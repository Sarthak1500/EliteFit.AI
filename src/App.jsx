import React, { useState, useEffect } from 'react';
import TaskDashboard from './TaskDashboard';
import SearchBar from './SearchBar';
import PriorityFilter from './PriorityFilter';
import StatusFilter from './StatusFilter';
import TaskForm from './TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  // Load tasks from localStorage with error handling and debugging
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    
    if (storedTasks) {
      try {
        const parsedTasks = JSON.parse(storedTasks);
        
        if (Array.isArray(parsedTasks)) {
          console.log("Loaded tasks from localStorage:", parsedTasks);
          setTasks(parsedTasks);
        } else {
          console.error("Stored tasks are not in the correct format.");
          setTasks([]);  // Default to an empty array if the format is incorrect
        }
      } catch (error) {
        console.error('Failed to parse tasks from localStorage:', error);
        setTasks([]);  // Default to an empty array in case of parse error
      }
    } else {
      console.log("No tasks found in localStorage");
      setTasks([]);  // Default to an empty array if no tasks are stored
    }
  }, []);
  
  // Save tasks to localStorage whenever `tasks` state changes
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
      console.log('Saved tasks to localStorage:', tasks);
    }
  }, [tasks]);

  const addTask = (task) => {
    const newTask = { ...task, id: Date.now(), status: 'Pending' };
    console.log('Adding new task:', newTask);

    setTasks(prevTasks => {
      const updatedTasks = [...prevTasks, newTask];
      return updatedTasks; // State will trigger the localStorage update
    });

    setShowForm(false);
  };

  const updateTask = (updatedTask) => {
    console.log('Updating task:', updatedTask);

    setTasks(prevTasks => {
      const updatedTasks = prevTasks.map(task =>
        task.id === updatedTask.id ? updatedTask : task
      );
      return updatedTasks; // State will trigger the localStorage update
    });

    setEditingTask(null);
    setShowForm(false);
  };

  const deleteTask = (id) => {
    console.log('Deleting task with id:', id);

    setTasks(prevTasks => {
        const updatedTasks = prevTasks.filter(task => task.id !== id);

        // Update localStorage after modifying the state
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));

        console.log('Updated tasks after deletion:', updatedTasks);

        return updatedTasks; // State update will trigger re-render
    });
};


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Task Management</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Controls Section */}
        <div className="space-y-4 md:space-y-0 md:flex md:items-center md:justify-between mb-6">
          {/* Search Bar */}
          <div className="w-full md:w-1/3">
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </div>

          {/* Filters and Add Button */}
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            {/* Filter Button (Mobile) */}
            <button
              className="md:hidden px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
              onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
            >
              Filters
            </button>

            {/* Filter Options */}
            <div className={`${isFilterMenuOpen ? 'block' : 'hidden'} md:block md:flex md:space-x-4`}>
              <PriorityFilter priorityFilter={priorityFilter} setPriorityFilter={setPriorityFilter} />
              <StatusFilter statusFilter={statusFilter} setStatusFilter={setStatusFilter} />
            </div>

            {/* Add Task Button */}
            <button
              onClick={() => setShowForm(true)}
              className="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 shadow-sm"
            >
              + Add Task
            </button>
          </div>
        </div>

        {/* Task Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-lg">
              <TaskForm
                addTask={addTask}
                updateTask={updateTask}
                editingTask={editingTask}
                closeForm={() => setShowForm(false)}
              />
            </div>
          </div>
        )}

        {/* Task Dashboard */}
        <div className="bg-white rounded-lg shadow">
          <TaskDashboard
            tasks={tasks}
            searchQuery={searchQuery}
            priorityFilter={priorityFilter}
            statusFilter={statusFilter}
            deleteTask={deleteTask}
            setEditingTask={(task) => { setEditingTask(task); setShowForm(true); }}
            updateTask={updateTask}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
