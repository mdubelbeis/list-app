import React from 'react';

interface TodoTextProps {
  children: React.ReactNode;
  className?: string;
}

const TodoText: React.FC<TodoTextProps> = ({
  className,
  children,
}) => {
  return <span className={className}>{children}</span>;
};

export default TodoText;
