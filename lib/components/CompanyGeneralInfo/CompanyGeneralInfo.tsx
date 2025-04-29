import React, { ReactNode, useLayoutEffect, useRef, useState } from 'react';
import { NextBtn } from '../Buttons/Next/NextBtn';
import SquareVector from '@assets/svg/modular_parts/vector_squares.svg?react';

export interface CompanyGeneralInfoProps {
  width?: string;
  height?: string;
  colourSchema?: string;
  contentTop?: ReactNode;
  companyLogo?: ReactNode;
  leftBlockWidth?: string;
  augBorderWidth?: string;
  topleftAug?: string;
  logoWidth?: string;
  logoHeight?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  btnTitle?: string;
}

export const CompanyGeneralInfo: React.FC<CompanyGeneralInfoProps> = ({
  width,
  height,
  colourSchema = '#fa0',
  augBorderWidth = '1px',
  topleftAug = '0.8rem',
  logoWidth = '45px',
  logoHeight = '45px',
  companyLogo,
  contentTop,
  onClick,
  btnTitle
}) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [br, setBr] = useState({ width: '0px', height: '0px' });

  useLayoutEffect(() => {
    if (!btnRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.target.getBoundingClientRect();
        setBr({ width: `${width + 2}px`, height: `${height + 2}px` });
      }
    });

    observer.observe(btnRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="text-black dark:text-white relative"
      style={{ width, height, borderColor: colourSchema }}>
      <div
        style={
          {
            '--aug-border-bg': colourSchema,
            '--aug-br': '1.3rem',
            '--aug-border-all': augBorderWidth,
            borderColor: colourSchema,
            width: logoWidth,
            height: logoHeight,
            position: 'absolute'
          } as React.CSSProperties
        }
        data-augmented-ui="br-clip border">
        {companyLogo}
      </div>
      <div
        style={
          {
            '--aug-border-bg': colourSchema,
            '--aug-tl-inset1': `calc(${logoWidth} - 1.15rem)`,
            '--aug-tl-inset2': `calc(${logoHeight} - 1.15rem)`,
            '--aug-tl': '1.4rem',
            '--aug-border-all': augBorderWidth,
            '--aug-tr': topleftAug,
            '--aug-br': br.height,
            '--aug-br-inset1': `calc(${br.width} - 1.5rem)`,
            width: '100%',
            height: '100%',
            borderColor: colourSchema
          } as React.CSSProperties
        }
        className="flex flex-col bg-crossGrid2 bg-backgroundSize bg-repeat"
        data-augmented-ui="tl-clip-inset tr-clip br-clip-x border">
        <div
          style={{
            height: `calc(100% - ${br.height})`,
            paddingLeft: `calc(${logoWidth} + 10px)`,
            paddingRight: topleftAug
          }}>
          {contentTop}
        </div>
        <div
          className="pl-1 flex flex-col gap-1 font-[Oxanium]"
          style={{ height: br.height, width: `calc(100% - ${br.width} - 0.2rem` }}>
          <div className="text-nowrap" style={{ fontSize: '0.8em', lineHeight: '0.8em' }}>
            LOCATION DATA
          </div>
          <div style={{ color: '#f30' }} className="flex justify-start">
            <SquareVector />
          </div>
        </div>
      </div>
      {onClick && (
        <NextBtn
          onClick={onClick}
          ref={btnRef}
          title={btnTitle}
          fontSize="14px"
          augBorderWidth="1px"
          style={{ position: 'absolute', right: '0', bottom: '0' }}
        />
      )}
    </div>
  );
};
