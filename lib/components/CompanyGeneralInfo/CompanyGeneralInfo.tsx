import { ReactNode } from 'react';

export interface CompanyGeneralInfoProps {
  width?: string;
  height?: string;
  colorSchema?: string;
  leftBlockContent?: ReactNode;
  companyLogo?: ReactNode;
  leftBlockWidth?: string;
}

export const CompanyGeneralInfo: React.FC<CompanyGeneralInfoProps> = ({
  width,
  height,
  colorSchema,
  leftBlockWidth = '5px',
  leftBlockContent,
  companyLogo
}) => {
  return (
    <div
      className="text-black dark:text-white flex gap-1 border-r-[0.8px] pr-1 h-full"
      style={{ width, height, borderColor: colorSchema }}>
      <div className={`h-full bg-evaTextWarning trapezoid`} style={{ width: leftBlockWidth }}>
        {leftBlockContent}
      </div>
      <div className="img-container" style={{ borderColor: colorSchema }}>
        {companyLogo}
      </div>
    </div>
  );
};
