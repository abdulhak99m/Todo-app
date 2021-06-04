import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import {db} from '../../../firebase'

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todosList, setTodosList] = useState([]);

  useEffect(() => {
      db.child('todos').on('value',snapshot => {
          if(snapshot.val() != null)
          {
            setTodosList({...snapshot.val()})
          }
      })
  },[])

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    db.child('todos').push(
        todo,err => {
            if(err)
            console.log(err)
        }
    )

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue,dbId) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    db.child(`todos/${dbId}`).set(
        newValue,err => {
            if(err)
            console.log(err)
        }
    )
    
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = (id,dbId) => {
    const removedArr = [...todos].filter(todo => todo.id !== id);
    db.child(`todos/${dbId}`).remove(err => {
            if(err)
            console.log(err)
        }
    )
    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todosList}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;