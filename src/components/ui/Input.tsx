import React from 'react';

interface InputProps {
  type: string;
  id: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  errorMessage: string;
}

const Input: React.FC<InputProps> = ({
  type,
  id,
  placeholder = '',
  onChange,
  value,
  errorMessage,
}) => {
  let bgColor = errorMessage ? 'bg-red-200' : '';

  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className={` ${bgColor} border-black border-2 rounded w-full focus:outline-none px-3 py-2`}
    />
  );
};

export default Input;
