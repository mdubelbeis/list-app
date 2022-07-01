import React from 'react';
import Button from './ui/Button';

interface HelpModalProps {
  onClick: () => void;
}

const HelpModal: React.FC<HelpModalProps> = ({ onClick }) => {
  return (
    <div className="absolute top-[20%] max-w-xl w-11/12 bg-white p-10 rounded z-50">
      <div className="bg-white flex flex-col items-center justify-between text-center space-y-10">
        <header className="">
          <h1>HELP MODAL</h1>
        </header>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Ratione tenetur repellat necessitatibus fugiat ullam
          officiis aspernatur voluptates voluptatum accusantium
          consectetur?
        </div>
        <footer>
          <div>
            <Button type="button" id="helpModalBtn" onClick={onClick}>
              Close
            </Button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HelpModal;
