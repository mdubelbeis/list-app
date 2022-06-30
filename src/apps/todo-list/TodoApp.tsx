import React, { useState } from 'react';

import DUMMY_DATA from '../../data'; // FAKE DATA FILE

import NewTodo from './NewTodo';
import TodoList from './TodoList';

interface TodoAppProps {}

const TodoApp: React.FC<TodoAppProps> = () => {
  const [todos, setTodos] = useState(DUMMY_DATA);

  const handleNewTodo = (
    task: string,
    id: number,
    isDone: boolean
  ) => {
    setTodos((prevState) => [{ task, id, isDone }, ...prevState]);
  };

  const handleDeleteTodo = (id: number) => {
    const filteredTodos = todos.filter(
      (todo: { task: string; id: number; isDone: boolean }) =>
        todo.id !== id
    );
    setTodos(filteredTodos);
  };

  return (
    // HEADER - to Return Home
    <div>
      <NewTodo onSubmit={handleNewTodo} />
      <TodoList items={todos} onDelete={handleDeleteTodo} />
    </div>
  );
};

export default TodoApp;
