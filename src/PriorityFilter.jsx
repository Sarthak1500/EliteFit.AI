import React from 'react';

const PriorityFilter = ({ priorityFilter, setPriorityFilter }) => (
  <select
    value={priorityFilter}
    onChange={(e) => setPriorityFilter(e.target.value)}
    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
  >
    <option value="All" className="text-gray-700">All Priorities</option>
    <option value="High" className="text-red-500">High</option>
    <option value="Medium" className="text-yellow-500">Medium</option>
    <option value="Low" className="text-green-500">Low</option>
  </select>
);

export default PriorityFilter;