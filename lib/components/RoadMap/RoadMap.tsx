import { ReactNode } from 'react';

export interface RoadMapProps {
  children: ReactNode;
}

export interface RoadMapItemProps {
  children: ReactNode;
}

export const RoadMapItem: React.FC<RoadMapItemProps> = ({ children }) => {
  return <div className="roadmap-item">{children}</div>;
};

export const RoadMap: React.FC<RoadMapProps> = ({ children }) => {
  return <div className="roadmap flex flex-col gap-2">{children}</div>;
};
