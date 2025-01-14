import React from 'react';
import { useState } from 'react';
import Task from './Task';
import  './style.css';



const App = ( { countCompleted, setCountCompleted, countIncompleted, setCountIncompleted , showResults , setShowResults } ) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  


  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), name: newTask }]);
    setNewTask('');
    setShowResults(false);

    setCountIncompleted(countIncompleted + 1);
  };

 const get_result = () => {
    setShowResults(true);
 }


  return (
    <div>
      <h1>Tasks</h1>
      <input
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
        placeholder="New Task"
      />
      <button onClick={addTask}>Add</button>
      {tasks.map((task) => (
  <div key={task.id} className="task-item">
    <Task task={task} />
    <input
      type="checkbox"
      onChange={() => {
        setCountCompleted(countCompleted + 1);
        setCountIncompleted(countIncompleted - 1);
      }}
    />
  </div>
))}

      <button onClick={get_result}>Get Result</button>
    </div>
  );
};


export default App;