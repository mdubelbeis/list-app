import React from 'react';

interface ButtonProps {
  type: 'button' | 'reset' | 'submit';
  children?: React.ReactNode;
  onClick?: () => void;
  id?: string;
  paddingX: string;
  width?: string;
  paddingY: string;
  bgColor?: string;
  txtColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  type,
  children,
  onClick,
  paddingX,
  paddingY,
  width = 'w-auto',
  bgColor = 'bg-black',
  txtColor = 'text-white',
}) => {
  return (
    <button
      type={type}
      className={`${paddingX} ${paddingY} ${width} ${bgColor} ${txtColor} rounded tracking-wider text-sm`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
