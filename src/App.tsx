import React, { useState, Fragment } from 'react';
import ReactDOM from 'react';

import AppOptions from './apps/AppOptions.js';
import TodoApp from './apps/todo-list/TodoApp';
import GroceryApp from './apps/grocery-list/GroceryApp';
import ChoresApp from './apps/chores-list/ChoresApp';
import Header from './components/ui/Header';
import QuestionMark from './components/icons/QuestionMark.js';
import HelpModal from './components/HelpModal.js';
import ModalBackdrop from './components/ui/ModalBackdrop.js';

const App: React.FC = () => {
  const [app, setApp] = useState('options');
  const [showHelpModal, setShowHelpModal] = useState(false);

  const handleAppSelection = (app: string) => {
    setApp(app);
  };

  const handleShowHelpModal = () => {
    setShowHelpModal(!showHelpModal);
  };

  const getApp = (app: React.ReactNode) => {
    let renderApp: React.ReactNode;
    switch (app) {
      case 'options':
        renderApp = (
          <div className="flex flex-col justify-between h-screen items-center">
            <AppOptions onAppSelection={handleAppSelection} />
            {!showHelpModal && (
              <div
                className="self-center mb-20"
                onClick={handleShowHelpModal}
              >
                <QuestionMark />
              </div>
            )}
            {showHelpModal && (
              <div className="flex justify-center">
                <ModalBackdrop onClick={handleShowHelpModal} />
                <HelpModal onClick={handleShowHelpModal} />
              </div>
            )}
          </div>
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
    <>
      <div className="h-screen flex flex-col justify-between max-w-3xl mx-auto">
        <div>{getApp(app)}</div>
      </div>
    </>
  );
};

export default App;
