import React, { useEffect, useState } from 'react';

import { Container, Name } from './styles';

const TaskList = () => {
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
    setTaskValue('');
  }

  useEffect(
    () => sessionStorage.setItem('taskList', JSON.stringify(taskList)),
    [taskList]
  );

  return (
    <div>
      <input
        type='text'
        placeholder='Type a task...'
        onChange={e => setTaskValue(e.target.value)}
        value={taskValue}
      />
      <button onClick={addTask}>Add a New Task</button>

      {taskList.map(task => (
        <Container key={task.id}>
          <Name>{task.name}</Name>
        </Container>
      ))}
    </div>
  );
};

export default TaskList;
