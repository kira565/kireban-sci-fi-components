import { useRef } from 'react';
import LayerSvg from '../../assets/svg/layers1.svg?react';

export interface ProjectiveCardProps {
  children?: React.ReactNode;
}

export const ProjectiveCard: React.FC = () => {
  const blockRef = useRef(null);

  return (
    <div
      ref={blockRef}
      className=" border-white border-opacity-50 border-[1px] dark:bg-darkGrayBg"
      style={{ width: '500px', height: '550px' }}>
      <div className="text-white">DA</div>
      <div className="bg w-full h-full flex flex-col">
        <div className="w-full h-[25%] mt-auto"></div>
      </div>
    </div>
  );
};
