import React, { useState } from 'react';

const Test = () => {
  const [taskList, setTaskList] = useState([
    { id: 0, name: 'programming', checked: false },
  ]);
  const [taskValue, setTaskValue] = useState('');
  const [taskId, setTaskId] = useState(1);

  function addTask() {
    if (!taskValue) return alert('Type anything in the input');

    setTaskId(taskId + 1);

    const newTask = {
      id: taskId,
      name: taskValue,
      checked: false,
    };

    setTaskList([...taskList, newTask]);
  }

  return (
    <div>
      <form
        action=''
      >
        <input
          type='text'
          placeholder='Type a task...'
          onChange={e => setTaskValue(e.target.value)}
        />

        <button
          onClick={addTask}
          type='reset'
        >
          Add a New Task
        </button>
      </form>

      {taskList.map(task => (
        <div key={task.id}>
          <span>{task.name}</span>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Test;
