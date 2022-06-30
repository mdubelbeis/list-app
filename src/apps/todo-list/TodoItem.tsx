import React, { useState } from 'react';

import Button from '../../components/ui/Button';
import TodoText from './TodoText';
import TrashIcon from '../../components/icons/TrashIcon';

import classes from '../../animations/fadeEffect.module.css';

interface TodoItemProps {
  todo: string;
  id: number;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  id,

  onDelete,
}) => {
  const [isComplete, setIsComplete] = useState(false);
  const [fadeIn, setFadeIn] = useState(true);

  const completed = !isComplete
    ? `text-black`
    : `line-through text-red-500`;

  const fadeEffect = fadeIn
    ? `${classes.todoFadeIn}`
    : `${classes.todoFadeOut}`;

  const handleCompleteTodo = () => {
    setIsComplete(!isComplete);
  };

  const handleDeleteTodo = () => {
    setTimeout(() => {
      onDelete(id);
    }, 1000);
    setFadeIn(false);
  };

  return (
    <li
      onClick={handleCompleteTodo}
      className={`${completed} ${fadeEffect} relative flex justify-center items-center border-2 border-black rounded p-10 sm:p-8 md:p-6 text-center hover:cursor-pointer`}
    >
      {fadeIn ? (
        <TodoText className="text-xl tracking-wider">{todo}</TodoText>
      ) : (
        <TodoText className="text-green-600">GOOD JOB!</TodoText>
      )}

      {isComplete && (
        <span className="absolute right-8 animate-pulse">
          <Button
            onClick={handleDeleteTodo}
            type="button"
            id="trash"
            paddingX="px-6 md:px-8"
            paddingY="py-4"
            width="w-auto"
          >
            <TrashIcon />
          </Button>
        </span>
      )}
    </li>
  );
};

export default TodoItem;
