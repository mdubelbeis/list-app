import React from 'react';

interface ButtonProps {
  type: 'button' | 'reset' | 'submit';
  children?: React.ReactNode;
  onClick?: () => void;
  id: string;
}

const Button: React.FC<ButtonProps> = ({
  type,
  children,
  onClick,
  id,
}) => {
  const optionBtns = id === 'optionsBtn' && 'px-6 py-6 w-6/12';

  const trashBtns = id === 'trashBtn' && 'px-6 md:px-8 py-4 w-auto';

  const addTodoBtn =
    id === 'addTodoBtn' && 'px-8 md:px-8 py-2 md:py-4 w-full';

  const homeBtn = id === 'homeBtn' && 'px-4 py-2';

  const helpModalBtn = id === 'helpModalBtn' && 'text-sm px-4 py-2';

  return (
    <button
      type={type}
      className={`rounded tracking-wider text-xl bg-black text-white ${addTodoBtn} ${optionBtns} ${homeBtn} ${trashBtns} ${helpModalBtn}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
