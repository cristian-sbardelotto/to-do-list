import React, { useState } from 'react';

import { ITask } from '../../types';

import {
  AddButton,
  Container,
  FinishButton,
  Input,
  Item,
  Name,
  RemoveButton,
  Title,
} from './styles';

function List() {
  const [taskList, setTaskList] = useState([
    { id: 0, name: 'My First Task!', checked: false },
  ]);
  const [taskValue, setTaskValue] = useState('');
  const [taskId, setTaskId] = useState(1);

  function addTask() {
    if (!taskValue) return alert('Type anything in the input');
    if (taskValue.length > 100)
      return alert('You have exceeded the maximum characters of the task!');

    const newTask: ITask = { id: taskId, name: taskValue, checked: false };

    setTaskList([...taskList, newTask]);
    setTaskId(taskId + 1);
    setTaskValue('');
  }

  function removeTask(id: number) {
    const newList = taskList.filter(task => task.id !== id);
    setTaskList(newList);

    taskList.length <= 1 && setTaskId(1); // resets the tasks ID to 1 if there're no tasks
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
    <Container>
      <Title>To Do List</Title>
      <Input
        type='text'
        placeholder='Type a task...'
        onChange={e => setTaskValue(e.target.value)}
        value={taskValue}
      />
      <AddButton onClick={addTask}>Add a New Task</AddButton>

      {taskList.map(task => (
        <Item
          key={task.id}
          checked={task.checked}
        >
          <Name>{task.name}</Name>

          <RemoveButton onClick={() => removeTask(task.id)}>
            Remove Task
          </RemoveButton>

          <FinishButton onClick={() => finishTask(task.id, task.checked)}>
            Finish Task
          </FinishButton>
        </Item>
      ))}
    </Container>
  );
}

export default List;
