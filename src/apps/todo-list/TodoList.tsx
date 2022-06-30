import React from 'react';

import TodoItem from './TodoItem';

interface TodoListProps {
  items: { id: number; task: string; isDone: boolean }[];
  onDelete: (id: number) => void;
}
const TodoList: React.FC<TodoListProps> = ({ items, onDelete }) => {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item) => (
        <TodoItem
          onDelete={onDelete}
          todo={item.task}
          key={item.id}
          id={item.id}
        />
      ))}
    </ul>
  );
};

export default TodoList;
