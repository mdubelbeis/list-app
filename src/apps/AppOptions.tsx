import React, { useState } from 'react';

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
      <section>
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <Button
            type="button"
            onClick={() => handleButtonClick('todoApp')}
            paddingX="px-6"
            paddingY="py-6"
            width="w-6/12"
          >
            TODO APP
          </Button>
          <Button
            type="button"
            onClick={() => handleButtonClick('choresApp')}
            paddingX="px-6"
            paddingY="py-6"
            width="w-6/12"
          >
            CHORES LIST
          </Button>
          <Button
            type="button"
            onClick={() => handleButtonClick('groceryApp')}
            paddingX="px-6"
            paddingY="py-6"
            width="w-6/12"
          >
            GROCERY LIST
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AppOptions;
