import React from 'react';

interface ButtonProps {
  type: 'button' | 'reset' | 'submit';
  children: React.ReactNode;
  onClick?: () => void;
  id?: string;
  paddingX?: string;
}

const Button: React.FC<ButtonProps> = ({
  type,
  children,
  onClick,
  id,
  paddingX,
}) => {
  return (
    <button
      type={type}
      className={`${paddingX} bg-black text-white py-2 rounded tracking-wider text-sm`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
