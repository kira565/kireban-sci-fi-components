import React, { ReactNode, useLayoutEffect, useRef, useState } from 'react';
import { NextBtn } from '../Buttons/Next/NextBtn';
import SquareVector from '@assets/svg/modular_parts/vector_squares.svg?react';
import { useBlinkingAppear } from '@/utils';

export interface CompanyGeneralInfoProps {
  width?: string;
  height?: string;
  colourSchema?: string;
  secondaryColourSchema?: string;
  bottomText?: string;
  children?: ReactNode;
  companyLogo?: ReactNode;
  leftBlockWidth?: string;
  augBorderWidth?: string;
  topleftAug?: string;
  logoWidth?: string;
  logoHeight?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  btnTitle?: string;
  appearAnimation?: boolean;
  isAnimationStarted?: boolean;
  firstAnimationDelay?: number;
  backdropBlur?: boolean;
}

export const CompanyGeneralInfo: React.FC<CompanyGeneralInfoProps> = ({
  width,
  height,
  colourSchema = '#fa0',
  secondaryColourSchema = '#f30',
  augBorderWidth = '1px',
  topleftAug = '0.8rem',
  logoWidth = '45px',
  logoHeight = '45px',
  companyLogo,
  children,
  onClick,
  bottomText,
  appearAnimation = false,
  isAnimationStarted = true,
  firstAnimationDelay = 0,
  btnTitle,
  backdropBlur
}) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  const [br, setBr] = useState({ width: '0px', height: '0px' });

  useBlinkingAppear(
    appearAnimation
      ? [
          {
            ref: iconRef,
            options: {
              blinks: 2,
              duration: 0.2,
              delayBetween: 0.2
            }
          },
          {
            ref: bodyRef,
            options: {
              blinks: 1,
              duration: 0.3,
              delayBetween: 0.2
            }
          },
          {
            ref: btnRef,
            options: {
              blinks: 3,
              duration: 0.1,
              delayBetween: 0.2
            }
          }
        ]
      : undefined,
    isAnimationStarted,
    firstAnimationDelay
  );

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
      className={`text-black dark:text-white relative`}
      style={{ width, height, borderColor: colourSchema }}>
      <div
        ref={iconRef}
        style={
          {
            '--aug-border-bg': colourSchema,
            '--aug-br': '1.3rem',
            '--aug-inlay-bg': backdropBlur ? '#000000' : undefined,
            '--aug-inlay-opacity': backdropBlur ? '0.3' : undefined,
            '--aug-border-all': augBorderWidth,
            borderColor: colourSchema,
            width: logoWidth,
            height: logoHeight,
            position: 'absolute',
            opacity: appearAnimation ? '0' : '1',
            backdropFilter: backdropBlur ? 'blur(12px)' : undefined
          } as React.CSSProperties
        }
        data-augmented-ui="br-clip border inlay">
        {companyLogo}
      </div>
      <div
        ref={bodyRef}
        style={
          {
            '--aug-border-bg': colourSchema,
            '--aug-inlay-bg': backdropBlur ? '#000000' : undefined,
            '--aug-inlay-opacity': backdropBlur ? '0.3' : undefined,
            '--aug-tl-inset1': `calc(${logoWidth} - 1.15rem)`,
            '--aug-tl-inset2': `calc(${logoHeight} - 1.15rem)`,
            '--aug-tl': '1.4rem',
            '--aug-border-all': augBorderWidth,
            '--aug-tr': topleftAug,
            '--aug-br': br.height,
            '--aug-br-inset1': `calc(${br.width} - 1.5rem)`,
            width: '100%',
            height: '100%',
            borderColor: colourSchema,
            opacity: appearAnimation ? '0' : '1',
            backdropFilter: backdropBlur ? 'blur(12px)' : undefined
          } as React.CSSProperties
        }
        className="flex flex-col bg-crossGrid2 bg-backgroundSize bg-repeat"
        data-augmented-ui="tl-clip-inset tr-clip br-clip-x border inlay">
        <div
          style={{
            height: `calc(100% - ${br.height})`,
            paddingLeft: `calc(${logoWidth} + 10px)`,
            paddingRight: topleftAug
          }}>
          {children}
        </div>
        <div
          className="pl-1 flex flex-col justify-end gap-[0.5] pb-1 font-[Oxanium]"
          style={{ height: br.height, width: `calc(100% - ${br.width} - 0.2rem` }}>
          <div className="text-nowrap" style={{ fontSize: '0.7em', lineHeight: '0.8em' }}>
            {bottomText}
          </div>
          <div style={{ color: secondaryColourSchema }} className="flex justify-start">
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
          backdropBlur
          style={{
            position: 'absolute',
            right: '0',
            bottom: '0',
            opacity: appearAnimation ? '0' : '1'
          }}
        />
      )}
    </div>
  );
};
