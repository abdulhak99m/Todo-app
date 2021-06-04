import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    dbId:null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value,edit.dbId);
    setEdit({
      dbId:null,
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return  Object.keys(todos).map((todo, index) => {
    return (
    <div
      className={todos[todo].isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todos[todo].id} onClick={() => completeTodo(todos[todo].id)}>
        {todos[todo].text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeTodo(todos[todo].id,todo)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: todos[todo].id, value: todos[todo].text,dbId: todo})}
          className='edit-icon'
        />
      </div>
    </div>
  )});
};

export default Todo;