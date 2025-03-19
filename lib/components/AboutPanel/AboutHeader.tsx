import { useRef } from 'react';
import './AboutHeader.css';
import DotSquare from '@assets/svg/icons/linesquare.svg?react';
import { useSciFiCode } from '@/hooks/useSciFiCode';
import { useAppearFrom } from '@/utils';

export interface AboutHeaderProps {
  text?: string;
  colorSchema?: string;
  upperHeaderText?: string;
  lowerHeaderText?: string;
  appear?: 'top' | 'left' | 'bottom' | 'right';
  height?: string;
  width?: string;
}

export const AboutHeader: React.FC<AboutHeaderProps> = ({
  text,
  colorSchema = '#fa0',
  upperHeaderText,
  lowerHeaderText = '',
  appear,
  height = '110px',
  width
}) => {
  const container = useAppearFrom(appear);
  const textRef = useRef(null);

  return (
    <div
      className="relative dark:text-white w-full"
      ref={container}
      style={{ height, minHeight: '110px', width }}>
      <div
        className="absolute flex justify-end items-end w-full h-[60px]"
        style={{ height: '1.5rem' }}>
        <span className="text-xs opacity-50 text-nowrap">{upperHeaderText}</span>
      </div>
      <div
        style={
          {
            '--aug-border-bg': colorSchema,
            '--aug-tr-inset2': 'calc(100% - 70px)',
            '--aug-border-all': '0.8px',
            '--aug-tr': '1.5rem'
          } as React.CSSProperties
        }
        className={`flex justify-start header-main h-[60%]`}
        data-augmented-ui="tr-clip-x border">
        <div className="h-[50px] w-[50px] flex items-center justify-center p-1 pl-2">
          <div className="h-[35px] w-[35px]">
            <DotSquare fill={colorSchema} />
          </div>
        </div>
        <div
          className="w-full mt-auto p-1 flex items-center justify-end"
          style={{ height: 'calc(100% - 1.5rem)' }}>
          <span ref={textRef} className="text-xl text-nowrap font-bold ml-2 mr-2">
            {text}
          </span>
        </div>
      </div>
      <div className="mt-2 border-t-[1.5px] h-[40%] " style={{ borderColor: colorSchema }}>
        <div
          className="w-[250px] ml-auto flex justify-end items-center font-[8z100]"
          style={
            {
              background: colorSchema,
              '--aug-border-bg': colorSchema,
              '--aug-border-all': '0.8px',
              '--aug-bl': '1.8rem'
            } as React.CSSProperties
          }
          data-augmented-ui="bl-clip border">
          <span className="text-black mr-2">{lowerHeaderText}</span>
        </div>
        <div className="text-[0.6rem] opacity-50 text-right">
          UNIT IDENTIFICATOR {useSciFiCode(321)}
        </div>
      </div>
    </div>
  );
};
