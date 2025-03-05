import { useRef } from 'react';
import './AboutHeader.css';
import DotSquare from '@assets/svg/icons/linesquare.svg?react';

export interface AboutHeaderProps {
  text?: string;
  colorSchema?: string;
  secondText?: string;
}

export const AboutHeader: React.FC<AboutHeaderProps> = ({
  text,
  colorSchema = '#fa0',
  secondText
}) => {
  const container = useRef(null);
  const textRef = useRef(null);

  return (
    <div className="relative dark:text-white w-full h-full">
      <div
        className="absolute flex justify-end items-end w-full h-[60px]"
        style={{ height: '1.5rem' }}>
        <span className="text-xs opacity-50 text-nowrap">{secondText}</span>
      </div>
      <div
        ref={container}
        style={
          {
            '--aug-border-bg': colorSchema,
            '--aug-tr-inset2': 'calc(100% - 70px)',
            '--aug-border-all': '0.8px',
            '--aug-tr': '1.5rem'
          } as React.CSSProperties
        }
        className={`flex justify-start header-main h-full`}
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
    </div>
  );
};
