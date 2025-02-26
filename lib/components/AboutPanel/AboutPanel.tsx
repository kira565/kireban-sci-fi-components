import { ReactNode } from 'react';
import { AboutHeader } from './AboutHeader';

export interface AboutPanelProps {
  width?: string;
  height?: string;
  className?: string;
  children?: ReactNode;
  headerText?: string;
}

export const AboutPanel: React.FC<AboutPanelProps> = ({
  className,
  width,
  height,
  children,
  headerText
}) => {
  return (
    <div
      className={
        className
          ? className
          : 'dark:text-white text-black font-[Oxanium] border-[0.5px] border-evaTextWarning p-1'
      }
      style={{ width, height }}>
      <AboutHeader text={headerText} />
      {children}
    </div>
  );
};
