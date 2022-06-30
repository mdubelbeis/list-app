import React, { useState } from 'react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

interface NewTodoProps {
  onSubmit: (name: string, id: number, isDone: boolean) => void;
}

const NewTodo: React.FC<NewTodoProps> = ({ onSubmit }) => {
  const [userInput, setUserInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userInput) {
      setErrorMessage('');
      onSubmit(userInput, Math.random(), false);
      setUserInput('');
    } else {
      setErrorMessage('You cannot have nothing to do...');
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserInput(e.target.value);
  };
  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col gap-4 p-8 mb-4 rounded items-center border-black border-2"
    >
      <div className="flex flex-col text-center w-full gap-6">
        <label
          htmlFor="newTodo"
          className="text-4xl text-black font-bold tracking-wider"
        >
          NEW TODO
        </label>
        <Input
          type="text"
          id="newTodo"
          onChange={handleInputChange}
          value={userInput}
          errorMessage={errorMessage}
        />
      </div>
      <div>
        {errorMessage && (
          <small className="text-red-500">{errorMessage}</small>
        )}
      </div>
      <div className="flex gap-2">
        <Button
          type="submit"
          paddingX="px-8 md:px-8"
          paddingY="py-2 md:py-4"
        >
          ADD
        </Button>
        {/* <Button type="reset">RESET</Button> */}
      </div>
    </form>
  );
};

export default NewTodo;
