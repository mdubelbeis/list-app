import React from 'react';

interface RenderListProps {
  children: React.ReactNode;
}

const RenderList: React.FC<RenderListProps> = ({ children }) => {
  return <ul className="flex flex-col gap-2">{children}</ul>;
};

export default RenderList;
