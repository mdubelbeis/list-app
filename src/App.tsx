import React, { useState } from 'react';

import AppOptions from './apps/AppOptions.js';
import TodoApp from './apps/todo-list/TodoApp';
import GroceryApp from './apps/grocery-list/GroceryApp';
import ChoresApp from './apps/chores-list/ChoresApp';

const App: React.FC = () => {
  const [app, setApp] = useState('options');

  const handleAppSelection = (app: string) => {
    setApp(app);
  };

  const getApp = (app: React.ReactNode) => {
    let renderApp: React.ReactNode;
    switch (app) {
      case 'options':
        renderApp = (
          <AppOptions onAppSelection={handleAppSelection} />
        );
        break;
      case 'todoApp':
        renderApp = <TodoApp />;
        break;
      case 'groceryApp':
        renderApp = <GroceryApp />;
        break;
      case 'choresApp':
        renderApp = <ChoresApp />;
    }
    return renderApp;
  };

  return (
    <div className="flex flex-col max-w-2xl mx-auto">
      {getApp(app)}
    </div>
  );
};

export default App;
