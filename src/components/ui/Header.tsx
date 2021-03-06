import React from 'react';

import Button from '../ui/Button';
interface HeaderProps {
  children: React.ReactNode;
  onClick: (name: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onClick, children }) => {
  const handleButtonClick = () => {
    onClick('options');
  };

  return (
    <div className="flex flex-col gap-4">
      <header>
        <nav>
          <Button
            type="button"
            onClick={handleButtonClick}
            id="homeBtn"
          >
            HOME
          </Button>
        </nav>
      </header>
      {children}
    </div>
  );
};

export default Header;
