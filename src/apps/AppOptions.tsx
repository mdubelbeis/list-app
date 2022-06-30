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
    <section>
      <header>
        <h1>CHOOSE YOUR LIST!</h1>
      </header>
      <div>
        <Button
          type="button"
          onClick={() => handleButtonClick('todoApp')}
        >
          TODO APP
        </Button>
        <Button
          type="button"
          onClick={() => handleButtonClick('choresApp')}
        >
          CHORES LIST
        </Button>
        <Button
          type="button"
          onClick={() => handleButtonClick('groceryApp')}
        >
          GROCERY LIST
        </Button>
      </div>
    </section>
  );
};

export default AppOptions;
