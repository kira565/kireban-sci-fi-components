import useSciFiCode from '@/hooks/useSciFiCode';
import { ReactNode } from 'react';

export interface PanelProps {
  width?: string;
  height?: string;
  colorSchema?: string;
  leftBlockContent?: ReactNode;
  leftBlockWidth?: string;
  children?: ReactNode;
  code?: number;
}

export const Panel: React.FC<PanelProps> = ({
  width,
  colorSchema = '#fa0',
  height,
  leftBlockContent,
  leftBlockWidth = '10px',
  children,
  code = 256
}) => {
  return (
    <div
      className="text-black dark:text-white font-[Oxanium] flex gap-2 border-r-[0.8px] pr-2"
      style={{ width, height, borderColor: colorSchema }}>
      <div className={`h-full bg-evaTextWarning trapezoid`} style={{ width: leftBlockWidth }}>
        {leftBlockContent}
      </div>
      <div className="overflow-y-scroll custom-scrollbar">{children}</div>
      <div className="flex gap-4 justify-between ml-auto">
        <div className={`w-[7px] h-[3px] mt-auto bg-black dark:bg-white`}></div>
        <div className="text-[0.4rem] mt-auto text-nowrap font-semibold">{useSciFiCode(code)}</div>
      </div>
    </div>
  );
};
