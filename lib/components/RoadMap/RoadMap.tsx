import { ReactNode } from 'react';

export interface RoadMapProps {
  children: ReactNode;
}

export interface RoadMapItemProps {
  children: ReactNode;
}

const RoadmapItem: React.FC<RoadMapItemProps> = () => {};

export const RoadMap: React.FC<RoadMapProps> = () => {
  return <div></div>;
};
