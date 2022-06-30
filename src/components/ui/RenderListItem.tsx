import React from 'react';

interface RenderListItemProps {
  onDelete: (id: number) => void;
  item: string;
  id: number;
}

const RenderListItem: React.FC<RenderListItemProps> = ({
  onDelete,
  item,
  id,
}) => {
  return <div>RenderListItem</div>;
};

export default RenderListItem;
