import React from 'react';

interface ModalOverlayProps {
  children: React.ReactNode;
}

const ModalOverlay: React.FC<ModalOverlayProps> = ({ children }) => {
  return (
    <div className="fixed top-[20vh] left-[5%] w-11/12 bg-white p-5 rounded z-60">
      <div className="">{children}</div>
    </div>
  );
};

export default ModalOverlay;
