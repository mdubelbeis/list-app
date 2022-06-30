import React from 'react';

import RenderListItem from './RenderListItem';

interface RenderListProps {
  children: React.ReactNode;
}

const RenderList: React.FC<RenderListProps> = ({ children }) => {
  return <ul className="flex flex-col gap-2">{children}</ul>;
};

// <ul className="flex flex-col gap-2">
//   {items.map((item) => (
//     { children }
//     // <RenderListItem
//     //   onDelete={onDelete}
//     //   todo={item.task}
//     //   key={item.id}
//     //   id={item.id}
//     // />

export default RenderList;
