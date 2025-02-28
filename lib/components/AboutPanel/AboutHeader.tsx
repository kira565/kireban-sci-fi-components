import { useRef } from 'react';
import './AboutHeader.css';
import DotSquare from '@assets/svg/icons/linesquare.svg?react';
import { Barcode } from '@/main';

export interface AboutHeaderProps {
  text?: string;
  colorSchema?: string;
}

export const AboutHeader: React.FC<AboutHeaderProps> = ({ text, colorSchema = '#fa0' }) => {
  const container = useRef(null);
  const textRef = useRef(null);

  return (
    <div className="flex h-[70px] relative">
      <div
        className="absolute flex justify-end items-end w-[100%] sm:w-[50%] h-[60px]"
        style={{ height: '1.5rem' }}>
        <span className="text-xs opacity-50 text-nowrap">CYBERCHECK 229 01223 12312</span>
      </div>
      <div
        ref={container}
        style={
          {
            '--aug-border-bg': colorSchema,
            '--aug-tr-inset2': 'calc(100% - 70px)'
          } as React.CSSProperties
        }
        className={`flex justify-start header-main h-[full] w-[100%] sm:w-[50%]`}
        data-augmented-ui="tr-clip-x border">
        <div className="h-[50px] w-[50px] flex items-center justify-center p-1 pl-2">
          <div className="h-[35px] w-[35px]">
            <DotSquare fill={colorSchema} />
          </div>
        </div>
        <div
          className="w-full mt-auto p-1 flex items-center justify-end"
          style={{ height: 'calc(100% - 1.5rem)' }}>
          <span ref={textRef} className="text-sm text-nowrap font-bold ml-2 mr-2">
            {text}
          </span>
        </div>
      </div>
      <div className="h-full items-end hidden sm:flex">
        <Barcode width="58%" />
      </div>
    </div>
  );
};
