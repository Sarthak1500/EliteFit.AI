# React Task Management with Priority Lists

# [LIVE](https://elite-fit-ai-sarthak1500s-projects.vercel.app/ )

## Features

- **Task Creation:** Add tasks to the respective priority lists.
- **Edit Task:** Modify task details such as the task name and description.
- **Delete Task:** Remove tasks when they are no longer needed.
- **Priority Management:** Move tasks between priority lists.
- **Visual Representation:** Each priority list is color-coded for quick identification.

## Screenshots

![Screenshot]https://drive.google.com/drive/folders/1iWmWyIre7G7hBBgENeDfJQbmqqbkHKrq?usp=sharing

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- React.js and npm (Node Package Manager) should be installed on your machine.

### Installation


1. Clone the repository:

   ```bash
   git clone https://github.com/Sarthak1500/EliteFit.AI.git
   ```


2. Navigate to the project directory:

   ```bash
   cd react-task-management
   ```


3. Install dependencies:

   ```bash
   npm install
   ```


4. Start the development server:

   ```bash
   npm start
   ```


5. Open your browser and go to [http://localhost:3000](http://localhost:3000) to access the app.


## Usage

1. **Add Task:** Click on the "Add Task" button in the respective priority section, fill in the task details, and press "Save."

2. **Edit Task:** Click on the task you want to edit, make the necessary changes, and press "Save Changes."

3. **Delete Task:** Click on the "Delete" button next to the task you want to remove.

4. **Change Priority:** Drag and drop tasks between the different priority lists to change their priority.


## Built With

- [React](https://reactjs.org/) - JavaScript library for building user interfaces.
- [Tailwind CSS](https://tailwindcss.com/) - Library for adding beautiful Styling With Responsive Design.


## Contributing

Contributions are welcome! Fork the repository and create a pull request with your changes.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## Acknowledgments

- Hat tip to anyone whose code was used as inspiration.
- Thanks to the React and open-source community for their amazing work.

- ## TECHNICAL QUESTION

- ## How long did you spend on coding  test ??
- Ans... all 3 days and overall 7 hours.


## What was the most usefull feature that was added to the latest version of your choosen language ? with code snippet
Ans... It was a priority filter 
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
## How would you track down a performance issue in production ??
Ans... NO, But to track i will follow the following steps
To track down a performance issue in production:

1. Gather Information: Collect user reports, logs, and any alerts to understand the symptoms.
2. Analyze Metrics: Use monitoring tools (e.g., Datadog, Prometheus) to check CPU, memory, network, and database performance.
3. Reproduce the Issue: Simulate conditions in a staging environment with load testing tools (e.g., JMeter).
4. Identify Bottlenecks: Use profilers, thread dumps, or database query analysis to find performance bottlenecks.
5. Isolate Components: Test individual components (e.g., front-end, back-end, DB) to pinpoint the issue.
6. Check External Services: Verify third-party dependencies are not causing the slowdown.
7. Use Tracing: Implement distributed tracing (e.g., Jaeger, Zipkin) to track request flow and latency.


## if you have more time what feature you consider ??
Ans... I wanted to add useer authentication via email and or using mobile number,
and to store users data I'll intigrate the backend of the project from node.js and mongoDb
