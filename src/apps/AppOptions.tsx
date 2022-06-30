import React, { useState } from 'react';
import QuestionMark from '../components/icons/QuestionMark';

import Button from '../components/ui/Button';

interface AppOptionsProps {
  onAppSelection: (app: string) => void;
}

const AppOptions: React.FC<AppOptionsProps> = ({
  onAppSelection,
}) => {
  const [appSelection, setAppSelection] = useState('');

  const handleButtonClick = (appName: string) => {
    onAppSelection(appName);
  };

  return (
    <div className="flex flex-col gap-10">
      <section className="bg-black rounded text-white text-center text-6xl p-6">
        <header>
          <h1>CHOOSE YOUR LIST!</h1>
        </header>
      </section>
      <main>
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <Button
            type="button"
            onClick={() => handleButtonClick('todoApp')}
            id="optionsBtn"
          >
            TODO APP
          </Button>
          <Button
            type="button"
            onClick={() => handleButtonClick('choresApp')}
            id="optionsBtn"
          >
            CHORES LIST
          </Button>
          <Button
            type="button"
            onClick={() => handleButtonClick('groceryApp')}
            id="optionsBtn"
          >
            GROCERY LIST
          </Button>
        </div>
      </main>
      {/* <div className="absolute bottom-10 right-10">
        <QuestionMark />
      </div> */}
    </div>
  );
};

export default AppOptions;
