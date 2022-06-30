import React, { useState, Fragment } from 'react';

import AppOptions from './apps/AppOptions.js';
import TodoApp from './apps/todo-list/TodoApp';
import GroceryApp from './apps/grocery-list/GroceryApp';
import ChoresApp from './apps/chores-list/ChoresApp';
import Header from './components/ui/Header';

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
          <>
            <Header onClick={handleAppSelection}>
              <AppOptions onAppSelection={handleAppSelection} />
            </Header>
          </>
        );
        break;
      case 'todoApp':
        renderApp = (
          <>
            <Header onClick={handleAppSelection}>
              <TodoApp />
            </Header>
          </>
        );
        break;
      case 'groceryApp':
        renderApp = (
          <>
            <Header onClick={handleAppSelection}>
              <GroceryApp />;
            </Header>
          </>
        );
        break;
      case 'choresApp':
        renderApp = (
          <>
            <Header onClick={handleAppSelection}>
              <ChoresApp />
            </Header>
          </>
        );
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
