import React, { useState } from 'react';

import { ITask } from '../../types';

import {
  Button,
  Container,
  Input,
  Item,
  Name,
  Title,
  FormGroup,
  Author,
  AuthorLink,
  ButtonsGroup,
  Icon,
} from './styles';

import {
  faTrashAlt,
  faCheck,
  faRemove,
} from '@fortawesome/free-solid-svg-icons';

function List() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskValue, setTaskValue] = useState('');
  const [taskId, setTaskId] = useState(1);

  function addTask() {
    if (!taskValue) return alert('Type anything in the input');

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

  return (
    <Container>
      <Title>todo list</Title>

      <FormGroup>
        <Input
          type='text'
          placeholder='Type a task...'
          onChange={e => setTaskValue(e.target.value)}
          value={taskValue}
        />
        <Button onClick={addTask}>Create task</Button>
      </FormGroup>

      {taskList.map(task => (
        <Item
          key={task.id}
          checked={task.checked}
        >
          <Name>{task.name}</Name>

          <ButtonsGroup>
            <Icon
              icon={task.checked ? faRemove : faCheck}
              onClick={() => finishTask(task.id, task.checked)}
              size='2x'
              color={task.checked ? '#fff' : '#33b078'}
            />

            <Icon
              icon={faTrashAlt}
              onClick={() => removeTask(task.id)}
              size='2x'
              color={task.checked ? '#000' : '#f009'}
            />
          </ButtonsGroup>
        </Item>
      ))}

      <Author>
        © Made by{' '}
        <AuthorLink
          href='https://github.com/cristian-sbardelotto'
          target='_blank'
          rel='noreferrer'
        >
          Cristian Sbardelotto
        </AuthorLink>
      </Author>
    </Container>
  );
}

export default List;
