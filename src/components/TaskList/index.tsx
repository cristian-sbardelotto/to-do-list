import React, { useEffect, useState } from 'react';

import { Container, Name } from './styles';

const TaskList = () => {
  const [taskList, setTaskList] = useState([
    { id: 0, name: 'My First Task!', checked: false },
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

  function removeTask(id: number) {
    const newList = taskList.filter(task => task.id !== id);
    setTaskList(newList);

    taskList.length <= 1 && setTaskId(1);
  }

  function finishTask(id: number, checked: boolean) {
    const index = taskList.findIndex(task => task.id === id);
    const newList = taskList;
    newList[index].checked = !checked;
    setTaskList([...newList]);
  }

  // useEffect(
  //   () => sessionStorage.setItem('taskList', JSON.stringify(taskList)),
  //   [taskList]
  // );

  return (
    <div>
      <input
        type='text'
        placeholder='Type a task...'
        onChange={e => setTaskValue(e.target.value)}
        value={taskValue}
      />
      <Name />
      <button onClick={addTask}>Add a New Task</button>

      {taskList.map(task => (
        <Container key={task.id} checked={task.checked}>
          <Name>{task.name}</Name>

          <button onClick={() => removeTask(task.id)}>Remove Task</button>

          <button onClick={() => finishTask(task.id, task.checked)}>Finish Task</button>
        </Container>
      ))}
    </div>
  );
};

export default TaskList;
