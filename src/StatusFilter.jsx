import React from 'react';

const StatusFilter = ({ statusFilter, setStatusFilter }) => (
  <select
    value={statusFilter}
    onChange={(e) => setStatusFilter(e.target.value)}
    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
  >
    <option value="All" className="text-gray-700">All Status</option>
    <option value="Completed" className="text-green-500">Completed</option>
    <option value="Pending" className="text-yellow-500">Pending</option>
  </select>
);

export default StatusFilter;