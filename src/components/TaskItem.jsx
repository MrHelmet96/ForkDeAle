import React, { useState } from 'react';

const TaskItem = ({ task, onTaskComplete, onTaskDelete }) => {
  const [completed, setCompleted] = useState(task.completed);

  const handleComplete = () => {
    setCompleted(!completed);
    onTaskComplete(task.id, !completed);
  };

  const handleDelete = () => {
    onTaskDelete(task.id);
  };

  return (
    <li style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      {task.name}
      <button onClick={handleComplete}>{completed ? 'Undo' : 'Complete'}</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TaskItem;