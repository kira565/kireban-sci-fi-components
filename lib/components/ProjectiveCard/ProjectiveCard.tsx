import { useRef } from 'react';

export interface ProjectiveCardProps {
  children?: React.ReactNode;
}

export const ProjectiveCard: React.FC = () => {
  const blockRef = useRef(null);

  return (
    <div
      ref={blockRef}
      className=" border-white border-opacity-50 border-[1px]"
      style={{ width: '200px', height: '150px' }}>
      <div className="text-white">DA</div>
    </div>
  );
};
