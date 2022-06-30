import React from 'react';

interface ModalBackdropProps {}

const ModalBackdrop: React.FC<ModalBackdropProps> = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen z-40 bg-black opacity-70"></div>
  );
};

export default ModalBackdrop;
